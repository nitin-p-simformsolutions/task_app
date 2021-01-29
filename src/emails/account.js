const sgMail = require('@sendgrid/mail');


sendgridAPIKey=process.env.SENDGRID_API_KEY
sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email , name) =>{
    sgMail.send({
        to:email,
        from:process.env.MY_EMAILID,
        subject:'Welcome! Thanks for joining in!',
        text:`Welcome onBoard ${name}, Let me know how to get along with the task-manager`
    })
}

const sendCancelEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:process.env.MY_EMAILID,
        subject:'Thanks for being part of our Family',
        text:`Hey ${name}, Please share your experience with us. Also add suggestions if any`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}