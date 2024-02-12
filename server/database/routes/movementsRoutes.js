const router = require('express').Router();
const controller = require('../controllers/propertiesControllers');

router.get('/properties', controller.getProperties);
router.post('/add', controller.addProperty);
router.put('/update/:id', controller.updateProperty);
router.delete('/delete/:id', controller.deleteProperty);

module.exports = router;