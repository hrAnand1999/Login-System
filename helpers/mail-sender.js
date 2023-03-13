const { createTransporter } = require("./mail-transporter")

const sendMail = async (recipient, subject="default", data) => {
    
    const mailOptions = {
        from : process.env.SENDER_MAIL,
        to : recipient,
        subject : subject,
        html : data
    }

    try {
        const emailTransporter = await createTransporter();
        emailTransporter.sendMail(mailOptions, function (err, data) {
            if(err) {
                console.log('err is :', err);
            } else {
                console.log(data)
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendMail
}