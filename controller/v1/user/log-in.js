const errorCodes = require('../../../error-codes');
const { getEncryptedPassword } = require('../../../helpers/encrypt-password');


const authenticateUser = (req, res) => {
    const requestPayload = {
        emailId : req.body.email,
        password : req.body.password
    }
    if(!requestPayload.emailId || !requestPayload.password) {
        return res.status(400).json({
            code : 'INVALID_REQUEST_400',
            message : errorCodes.INVALID_REQUEST_400
        })
    }
    const encryptedPassword = getEncryptedPassword(requestPayload.password);
}

module.exports = {
    authenticateUser
}