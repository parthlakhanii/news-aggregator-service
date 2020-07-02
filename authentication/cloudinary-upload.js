const cloudinary = require('cloudinary').v2
const shortId = require('shortid')
const { logger, getFileNameWithoutExtension, dbCons } = require('../lib/utils')
const dateFormat = require('dateformat')

const config = require('config')

const configuration = config.cloudinary
cloudinary.config(configuration)

const uploadFile = (file, folderName) => {
    return new Promise(async (resolve, reject) => {
        const uploadOptions = {
            'public_id': folderName + '/' + generatePublicId(file),
            'resource_type': 'auto'
        }
        cloudinary.uploader.upload(file.path, uploadOptions, function (err, result) {
            if (err) {
                return reject(err)
            }
            return resolve(result)
        })
    })
}

const deleteFile = (urlsList) => {
    return new Promise(async (resolve, reject) => {
        cloudinary.api.delete_resources(splitPublicID(urlsList), function (error, result) {
            if (error) {
                return reject(error)
            }
            return resolve(result)
        })
    })
}

const splitPublicID = (secureURLs) => {
    let publicIds = []
    for (let url of secureURLs) {
        let splitedSecureURL = url.split('/')
        let fileName = splitedSecureURL[splitedSecureURL.length - 2] + '/' + splitedSecureURL[splitedSecureURL.length - 1]
        let publicId = fileName.split('.')
        publicIds.push(publicId[0])
    }
    return publicIds
}

const generatePublicId = file => {
    const name = file.name || 'storage'
    return `${getFileNameWithoutExtension(name)}_${dateFormat(new Date(), dbCons.BACKEND_DATE_FORMAT_FOR_FILE)}`
}

const downloadZIPUrl = (urls) => {
    return new Promise(async (resolve, reject) => {
        let publicIds = splitPublicID(urls)
        const payLoad = {
            public_ids: publicIds,
            target_public_id: 'Photography.zip',
            skip_transformation_name: true,
            allow_missing: true
        }
        const response = await cloudinary.utils.download_zip_url(payLoad);
        return resolve(response)
    })
}

module.exports = {
    uploadFile,
    deleteFile,
    downloadZIPUrl
}
