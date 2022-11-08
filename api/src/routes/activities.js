const Router = require('express');
const router = Router();
const { createActivity }  = require('../controllers/activity-controllers.js');

router.post('/', createActivity);

module.exports = router;