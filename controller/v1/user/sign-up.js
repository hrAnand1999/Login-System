const errorCodes = require('../../../error-codes');
const { signUpSourceEnumOptions } = require('../../../enum');


const createUser = (req, res) => {

    const requestPayload = {
        name : req.body.name,
        emailId : req.body.email,
        password : req.body.password,
        confirmPassword : req.body.confirmPassword,
        source : req.body.source ? req.body.source : signUpSourceEnumOptions.API
    }

    if(!requestPayload.name || !requestPayload.emailId || !requestPayload.password || !requestPayload.confirmPassword) {
        return res.status(404).json({
            code : 'INVALID_REQUEST_400',
            message : errorCodes.INVALID_REQUEST_400
        })
    }
}

module.exports = {
    createUser
}