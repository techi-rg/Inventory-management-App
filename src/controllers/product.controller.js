
import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController
{
    getProducts (req, res)
    {
        let products = ProductModel.get();
        console.log( products );
        res.render( "products", { products: products } ) // rendering the products.ejs file and passing the products array to it we are mentioning only the file name as we have already set the views directory and view engine in index.js products is the key and values in the products array.
        
        
        // res.sendFile(path.join(path.resolve(), "src","views", "products.html"));
    }
}