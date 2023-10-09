// Import native 'node.js' modules
import path from "path";

// Import models
import { ProductModel } from "../models/ProductModel.js";
const Product = new ProductModel();

// Import VIEWS path
import {
    VIEWS
} from "./../config/app-config.js";

// Controller class
export class PublicController {
    async test(req, res) {
        try {
            let products = await Product.getAll();
            res.status(200).json(products);
        } catch (e) {
            throw e;
        }
    }
}