const errorCodes = require('../../../error-codes');
const { signUpSourceEnumOptions, SIGN_UP_MAIL_SUBJECT } = require('../../../enum');
const { getEncryptedPassword } = require('../../../helpers/encrypt-password');
const { sendMail } = require('../../../helpers/mail-sender');
const ejs = require('ejs');


const createUser = async (req, res) => {

    const requestPayload = {
        name : req.body.name,
        emailId : req.body.email,
        password : req.body.password,
        confirmPassword : req.body.confirmPassword,
        source : req.body.source ? req.body.source : signUpSourceEnumOptions.API
    }

    if(!requestPayload.name || !requestPayload.emailId || !requestPayload.password || !requestPayload.confirmPassword) {
        return res.status(400).json({
            code : 'INVALID_REQUEST_400',
            message : errorCodes.INVALID_REQUEST_400
        })
    } else if(requestPayload.password !== requestPayload.confirmPassword) {
        return res.status(400).json({
            code : 'PASSWORD_NOT_MATCHING_401',
            message : errorCodes.PASSWORD_NOT_MATCHING_401
        })
    }
    const hashedPassword = await getEncryptedPassword(requestPayload.password);
    const data = await ejs.renderFile('views/sign-up.ejs', {name : requestPayload.name})
    await sendMail(requestPayload.emailId, SIGN_UP_MAIL_SUBJECT, data);

    return res.status(200).json({
        password : hashedPassword,
        message : 'ok'
    })
}

module.exports = {
    createUser
}