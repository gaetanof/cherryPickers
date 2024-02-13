// propertiesRoutes.js

const router = require('express').Router();
const { getProperties, addProperty, updateProperty, deleteProperty } = require("../controllers/propertiesControllers");

router.get('/properties', getProperties);
router.post('/add', addProperty);
router.put('/update/:id', updateProperty);
router.delete('/delete/:id', deleteProperty);

module.exports = router;



