const { Router } = require('express');
const productController = require('../../controllers/productController');
const validateProduct = require('../../middlewares/validateProduct');

const router = Router();

router.delete('/:id', validateProduct, productController.deleteProduct);
router.get('/', validateProduct, productController.getAllProducts);
router.get('/:id', validateProduct, productController.getProductById);
router.post('/', validateProduct, productController.createProduct);
router.put('/:id', validateProduct, productController.updateProduct);

module.exports = router;
