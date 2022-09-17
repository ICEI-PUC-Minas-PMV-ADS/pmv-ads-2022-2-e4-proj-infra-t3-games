FROM public.ecr.aws/lambda/nodejs:16

COPY . .

RUN  npm install

COPY app.js ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]