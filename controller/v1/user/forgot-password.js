const errorCodes = require('../../../error-codes');

const recoverPassword = (req, res) => {
    const requestPayload = {
        emailId : req.body.email
    }
    if(!requestPayload.emailId) {
        return res.status(400).json({
            code : "INVALID_REQUEST_400",
            message : errorCodes.INVALID_REQUEST_400
        })
    }
}

module.exports = {
    recoverPassword
}