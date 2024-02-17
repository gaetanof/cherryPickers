// propertiesRoutes.js
const router = require('express').Router();
const multer = require("multer")
const { getProperties, addProperty, updateProperty, deleteProperty } = require("../controllers/propertiesControllers");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/properties', getProperties);
router.post('/add', upload.array("fotos"), addProperty);
router.put('/update/:id', updateProperty);
router.delete('/delete/:id', deleteProperty);

module.exports = router;



