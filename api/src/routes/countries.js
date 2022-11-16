const Router = require('express');
const router = Router();
const {  getCountries, getxName,getxId }  = require('../controllers/countries-controllers.js');

router.get('/:idPais', getxId );
router.get('/', getCountries );
router.get('/', getxName );



module.exports = router; 