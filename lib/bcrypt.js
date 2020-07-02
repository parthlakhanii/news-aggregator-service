const bcrypt = require('bcrypt')
const saltRounds = 10

const encryptIt = async (password) => {
    // return new Promise((resolve, reject) => {
    //     bcrypt.hash(password, saltRounds, function (err, res) {
    //         return resolve(res)
    //     })
    // })
    return bcrypt.hashSync(password, saltRounds)
}

const compareIt = async (plainText, hasedText) => {
    // return new Promise((resolve, reject) => {
    //     bcrypt.compare(plainText, hasedText, function (err, res) {
    //         return resolve(res)
    //     })
    // })
    return bcrypt.compareSync(plainText, hasedText)
}

module.exports = {
    encryptIt,
    compareIt
}