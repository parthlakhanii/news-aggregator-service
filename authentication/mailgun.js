
const configs = require('config')
const mailgun = require("mailgun-js");
const mg = mailgun({ apiKey: configs.mailgun_conf.apiKey, domain: configs.mailgun_conf.domain });
const { generateSendErrorResponse } = require('../lib/utils')

// require('./../assets/mail_templates/')
// assets\\mail_templates\\signup-mail.html

const EmailTemplates = require('swig-email-templates');
const templates = new EmailTemplates({
    root: configs.email_root_dir
});
const sendMail = async (htmlFile, context, emailList, subjectToSend) => {
    try {
        templates.render(htmlFile, context, async function (err, html, text, subject) {
            if (err) {
                return false
            }
            return triggerMail(emailList, subjectToSend, html, text)
        })
    } catch (error) {
        return error
    }
}



function triggerMail(emailList, subjectToSend, html, text) {
    return new Promise(async (resolve, reject) => {
        const data = {
            from: 'Photography <me@sandbox70a66c9f5cab456dbe088d323ca84f41.mailgun.org>',
            to: emailList,
            subject: subjectToSend,
            text: text,
            html: html
        };
        await mg.messages().send(data, function (error, body) {
            if (error) {
                return reject(generateSendErrorResponse([], 'Error while sending mail'))
            }
            return resolve(true)
        });
    })
}

module.exports = {
    sendMail
}

