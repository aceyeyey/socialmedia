// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
 // uri: 'mongodb://localhost:27017/meandb', // Databse URI and database name
 uri:'mongodb://aceyeyey:aceaytin0321@ds227168.mlab.com:27168/meandb',
 secret: crypto, // Cryto-created secret
 db: 'meandb' // Database name
}