const crypto = require('crypto');
require('dotenv').config();

const getEncryptedPassword = async (password) => {

    const algorithm = process.env.ALGORITHM;
    const initVector = crypto.createHash('sha256').update(String(process.env.INIT_VECTOR)).digest('base64').slice(0, 16);
    const securityKey = crypto.createHash('sha256').update(String(process.env.SECURITY_KEY)).digest('base64').slice(0, 32);
    const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
    let encryptedData = cipher.update(password, "utf-8", "hex");
    encryptedData += cipher.final("hex");
    return encryptedData;

    // const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
    // let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
    // decryptedData += decipher.final("utf-8");
    // console.log("decrypted message :", decryptedData)

}

module.exports = {
    getEncryptedPassword
}