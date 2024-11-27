import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../contollers/product.controller.js";


const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

//patch is to update some fields on the resource
//put is to update all fields on the resource
router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;