
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

const cloudinary = require('./authentication/cloudinary-upload')
var upload = multer({ storage: storage }).array('userPhoto', 2);

// app.post('/api/photo', function (req, res) {
//     upload(req, res, async function (err) {
//         let response = []
//         for(let element of req.files) {
//             element.path = './uploads/' + element.filename
//             const res = await cloudinary.uploadFile(element)
//             response.push(res)   
//         }
//         res.send(response)
//     });
// });
