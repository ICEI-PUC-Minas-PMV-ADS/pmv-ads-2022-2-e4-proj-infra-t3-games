const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

exports.handler = async function(event, context) {
  const mailSent = await transporter.sendMail({
    text: "Texto do E-mail",
    subject: "Assunto do e-mail",
    from: "Gerald Santos <resgate.games.teste@gmail.com",
    to: ["resgate.games.teste@gmail.com", "gerald.biel51@gmail.com,samuel.ottm@gmail.com"],
    html: `
    <!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>Discount Light</title><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if mso]>
        <noscript>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        </noscript>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .mj-outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-per-100 { width:100% !important; max-width: 100%; }
      }</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type="text/css">@media only screen and (max-width:480px) {
      table.mj-full-width-mobile { width: 100% !important; }
      td.mj-full-width-mobile { width: auto !important; }
    }</style></head><body style="word-spacing:normal;background-color:#000000;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">Pre-header Text</div><div style="background-color:#000000;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:linear-gradient(10deg, #FF238B 0%, rgba(209, 85, 178, 0.645151) 33.33%, rgba(131, 0, 190, 0.63) 66.67%, rgba(0, 0, 0, 0.39) 87.5%);background-color:linear-gradient(10deg, #FF238B 0%, rgba(209, 85, 178, 0.645151) 33.33%, rgba(131, 0, 190, 0.63) 66.67%, rgba(0, 0, 0, 0.39) 87.5%);width:100%;"><tbody><tr><td><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" bgcolor="linear-gradient(10deg, #FF238B 0%, rgba(209, 85, 178, 0.645151) 33.33%, rgba(131, 0, 190, 0.63) 66.67%, rgba(0, 0, 0, 0.39) 87.5%)" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:700px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:150px;"><img alt="logo do email" height="auto" src="https://thumbs.dreamstime.com/b/%C3%ADcone-do-vetor-de-gamepad-isolado-no-fundo-transparente-127331575.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150"></td></tr></tbody></table></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:30px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:1px;line-height:24px;text-align:center;text-transform:uppercase;color:#ffffff;">PARABÈNS SEU RESGATE FOI UM SUCESSO !<br><hr color="#FFFFFF"></div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-top:0;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:13px;font-weight:bold;letter-spacing:1px;line-height:30px;text-align:center;text-transform:uppercase;color:#FFFFFF;">Acompanhe abaixo instruções<br>da solicitação do jogo</div></td></tr><tr><td align="center" style="font-size:0px;padding:0;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:700px;"><img alt height="auto" src="https://media.istockphoto.com/illustrations/game-pieces-triangle-cross-square-and-circle-illustration-rectangular-illustration-id1300208115?k=20&m=1300208115&s=612x612&w=0&h=M3MnBaM3eoZlUbMgOPFT-M5LA6HDxpZd8HjyA8iCylw=" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="700"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="body-section-outlook" style="width:700px;" width="700" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div class="body-section" style="-webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); margin: 0px auto; max-width: 700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="700px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:670px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:24px;text-align:left;color:#212b35;">Informações de resgate:</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:24px;text-align:left;color:#637381;">Olá $(usuario),</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;">Após o resgate concluido basta vc acessar a sua bibloteca, acessando com suas credenciais.Assim vocẽ ja esta livre para se divertir e resgatar um limite de 10 jogos por dia, obrigado por sua preferencia ! esperamos te ver logo logo.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;"><ul><li style="padding-bottom: 20px"><strong>Acessando Conta:</strong> Sit amet consectetur adipisicing elit.</li><li style="padding-bottom: 20px"><strong>Vrerificando Biblioteca:</strong> Repudiandae accusamus obcaecati voluptatibus accusantium perspiciatis.</li></ul></div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="700px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:700px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:0;word-break:break-word;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#00000;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.facebook.com/sharer/sharer.php?u=https://mjml.io/" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/facebook.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#00000;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://plus.google.com/share?url=https://mjml.io/" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/google-plus.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#00000;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://twitter.com/intent/tweet?url=https://mjml.io/" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/twitter.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#00000;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://mjml.io/&title=&summary=&source=" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:bold;line-height:24px;text-align:center;color:#C2C2C2;">Veja este email no seu navegador.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#C2C2C2;">Você está recebendo este anúncio por e-mail porque se registrou noCollections Gamers.E concordou em receber nossos e-mails sobre novos recursos, eventos e ofertas especiais.<br>© Collections Gamers, Todos os direitos reservados.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#C2C2C2;">&copy; Collections Gamers., All Rights Reserved.</div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="700px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-top:0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:700px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;"><!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:700px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding-right:0;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:bold;line-height:16px;text-align:center;color:#C2C2C2;"><a class="footer-link" href="https://www.google.com" style="color: #888888;">Privacy</a>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<a class="footer-link" href="https://www.google.com" style="color: #888888;">Unsubscribe</a></div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div></body></html>
 `,
  });
}
