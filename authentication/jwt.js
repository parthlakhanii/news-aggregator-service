const jwt = require('jsonwebtoken')
const fs = require('fs')

// /authentication/private.key

const privateKey = fs.readFileSync('./authentication/private.key', 'utf8')
const publicKey = fs.readFileSync('./authentication/public.key', 'utf8')

const i = 'My PhotoGraPHYYY'
const s = 'xxx@abc.com'
const a = 'https://www.myPhotoGraphy.com'

const signINOption = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: '2h',
    algorithm: 'RS256'
}

const verifyOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: '2h',
    algorithm: ['RS256']
}

const generateToken = async (payload) => {
    return jwt.sign(payload, privateKey, signINOption)
}

const verifyToken = (token, callback) => {
    return jwt.verify(token, publicKey, verifyOptions, function (error, response) {
        if (error) {
            return callback(error)
        }
        return callback(null, response)
    })
}

module.exports = {
    generateToken, 
    verifyToken
}