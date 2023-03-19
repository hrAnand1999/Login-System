require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (email = "") => {
    const token = jwt.sign(
        {email},
        process.env.JWT_SECRET_KEY,
        {
            "algorithm" : "HS256",
            "expiresIn" : "1h"
        }
    )
    return token;
}

const decodeToken = (token = "") => {
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decodedValue;
}

module.exports = {
    generateToken,
    decodeToken
}