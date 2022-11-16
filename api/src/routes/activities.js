const Router = require('express');
const router = Router();
const { createActivity, getActivities }  = require('../controllers/activity-controllers.js');

router.get('/', getActivities);
router.post('/', createActivity);


module.exports = router;