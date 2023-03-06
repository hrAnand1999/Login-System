const crypto = require('crypto');
require('dotenv').config();

const getHashedPassword = async (password) => {

    const algorithm = process.env.ALGORITHM;
    const initVector = Buffer.from(process.env.INITVECTOR, "utf-8") ;
    const securityKey = Buffer.from(process.env.SECURITYKEY, "utf-8") ;
    console.log(initVector, securityKey)
    const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
    let encryptedData = cipher.update(password, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    console.log("encrypted message : ", encryptedData);

    const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
    let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
    decryptedData += decipher.final("utf-8");
    console.log("decrypted message :", decryptedData)

}

module.exports = {
    getHashedPassword
}