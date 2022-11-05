const Router = require('express');
const router = Router();
const {  getCountries }  = require('../controllers/countries-controllers.js');

router.get('/', getCountries );


module.exports = router;