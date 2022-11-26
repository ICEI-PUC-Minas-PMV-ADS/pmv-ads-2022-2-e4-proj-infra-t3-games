
const AWS = require('aws-sdk')
const Lambda = new AWS.Lambda()
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
let conn = null;

const ResgateSchema = require('./ResgateSchema')

const MOGO_URI = process.env.MOGO_URI

exports.handler = async function(event, context) {
  // Make sure to add this so you can re-use `conn` between function calls.
  // See https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas
  context.callbackWaitsForEmptyEventLoop = false;

  // Because `conn` is in the global scope, Lambda may retain it between
  // function calls thanks to `callbackWaitsForEmptyEventLoop`.
  // This means your Lambda function doesn't have to go through the
  // potentially expensive process of connecting to MongoDB every time.
  if (conn == null) {
    conn = mongoose.createConnection(MOGO_URI, {
      // and tell the MongoDB driver to not wait more than 5 seconds
      // before erroring out if it isn't connected
      serverSelectionTimeoutMS: 5000
    });
    
    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn.asPromise();
    conn.model('Resgate', ResgateSchema);
  }

  const meuResgate = {
    usuario: event.usuario,
    jogo: event.jogo,
    hora: new Date,
    codigo_resgate: uuidv4(),
    email_enviado: false
  }
  

  const M = conn.model('Resgate');

  const doc = await M.create(meuResgate);

 const req = {
    FunctionName: "envio_email",
    Payload: JSON.stringify(meuResgate)
  }
  await Lambda.invoke(req).promise()
  
  return doc;
};
