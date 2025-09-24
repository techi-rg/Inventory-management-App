import express from 'express';
import ProductController from './src/controllers/product.controller.js';

const server = express();

// create an instance of product controller
const productController = new ProductController();

server.get('/', productController.getProducts);

server.use(express.static('src/views'))


server.listen( 3400 );
console.log("Server is running on port 3400");