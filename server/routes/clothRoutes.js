const express = require('express')
const clothController = require('../controllers/clothController')

const router = express.Router()
router
    .route('/cloth')
    .get(clothController.getClothes)
    .post(clothController.createCloth)
    .patch(clothController.updateCloth)
    .delete(clothController.deleteCloth)
router
    .route('/cloth/:id')
    .get(clothController.getClothById)

module.exports = router


