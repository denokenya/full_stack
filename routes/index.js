//import expres
import express from "express"

//import product controllers

import{
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
    
} from "../controllers/Products";

const router =express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.post('/',createProduct);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export default router;
