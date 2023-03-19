const errorCodes = require('../../../error-codes');
const { decodeToken } = require('../../../helpers/common-helpers');

const setActive = async (req, res) => {
    const requestPayload = {
        token : req.query.token
    }
    if(!requestPayload.token) {
        return res.status(400).json({
            code : 'INVALID_REQUEST_400',
            message : errorCodes.INVALID_REQUEST_400
        });
    }
    const { email, exp } = decodeToken(requestPayload.token);
    if(Date.now() >= exp * 1000) {
        return res.status(401).json({
            code : 'TOKEN_EXPIRED_401',
            message : errorCodes.TOKEN_EXPIRED_401
        })
    }
    res.status(200).send(email)

}

module.exports = {
    setActive
}