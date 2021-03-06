var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
    dest: './public/uploads/'
});

var controller = require('../controllers/user.controller');

var validate = require('../validate/user.validate');

var authLogin = require('../middlewares/auth.middleware');

router.get('/', authLogin.requireAuth, controller.index);

router.get('/search', authLogin.requireAuth, controller.search);

router.get('/create', authLogin.requireAuth, controller.create);

router.get('/:id', authLogin.requireAuth, controller.id);

router.post('/create',
    upload.single('avatar'),
    authLogin.requireAuth,
    validate.postCreate,
    controller.postCreate
);

router.get('/delete/:id', authLogin.requireAuth, controller.delete);

module.exports = router;