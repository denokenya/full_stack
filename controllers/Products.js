//import product model
import Product from "../models/productModel.js";

//get all the products
export const getAllProducts =async (req, res) =>{
    try{
        const products =await Product.findAll();
        res.json(products);

    } catch (error) {
        res.json({message: error.message});
    }
}

// get product by id
export const getProductById =async ( req, res) =>{
    try{
        const product =await Product.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(product[0]);

    }catch (error) {
        res.json({message: error.message});
    }
}

//CREATE a product
export const createProduct = async (req,res) =>{
    try{
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });

    } catch (error){
        res.json({message:error.message});
    }
}

//UPDATE product
export const updateProduct =async (req,res) =>{
    try{
        await Product.update(req.body, {
            where: {
                id:req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });

    } catch (error) {
        res.json({message:error.message});
    }
}

//DELETE a product

export const deleteProduct = async (req,res) =>{
    try{
        await Product.destroy({
            where: {
                id:req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });


    } catch (error) {
        res.json({message:error.message});
    }
}