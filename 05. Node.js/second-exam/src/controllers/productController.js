import { Router } from "express";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import productService from "../services/productService.js";

const productController = Router();




productController.get('/catalog', async (req,res)=>{
    const products = await productService.getAll().lean();
    res.render('product/catalog', {products, title: "Products page"})
})

productController.get('/create', isAuth, (req,res)=>{
    res.render('product/create', {title: "Add product page"})
})

productController.post('/create', isAuth, async (req,res)=>{
    const productData = req.body;
    const ownerId = req.user._id;

    try {
        await productService.create(productData, ownerId)

        res.redirect('/products/catalog')
    } catch (err) {
        const error = getErrorMessage(err);
        return res.render('product/create', { product: productData, error, title:'Create Product'})
    }
})

productController.get('/:productId/details', async (req,res)=>{
    const productId = req.params.productId;
    const product = await productService.getOne(productId).lean();

    const isOwner = product.owner && product.owner.toString() === req.user?._id;

    res.render('product/details', { product, isOwner });

})

productController.get('/:productId/edit', isAuth, async (req,res)=>{
    const productId = req.params.productId;
    const product = await productService.getOne(productId).lean();

    res.render('product/edit', { product })
})

productController.post('/:productId/edit', isAuth, async (req,res)=>{
    const productId = req.params.productId;
    const productData =req.body;

    await productService.edit(productId, productData);

    res.redirect(`/products/${productId}/details`)
    

})

productController.get('/:productId/delete', isAuth, async (req,res) =>{
    const productId = req.params.productId;

    const product = await productService.getOne(productId).lean();
    if (product.owner?.toString() !== req.user._id) {
        res.setError('You cannot delete this movie!');
        return res.redirect('/404');
    }

    await productService.remove(productId);

    res.redirect('/');

})

productController.get('/search', async (req,res) =>{
    const products = await productService.getAll().lean();

    res.render('product/search', {products, title: "Search page"})
})

productController.post('/search', async (req, res) => {
    try {
        const products = await productService.search(req.body.search); 
        res.render('product/search', { products }); 
    } catch (err) {
        const error = getErrorMessage(err);
        return res.render('product/search', {error, title:'Seach Page'})
    }
});





export default productController;
