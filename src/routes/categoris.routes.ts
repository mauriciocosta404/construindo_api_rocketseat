import { Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import multer from "multer";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes=Router();

const upload=multer({
    dest:"./tmp"
});

categoriesRoutes.post('/',(request,response)=>{
    createCategoryController.handle(request,response);
});

categoriesRoutes.get('/',(request,response)=>{
    listCategoriesController.handle(request,response);
})

categoriesRoutes.post('/import',upload.single("file"),(request,response)=>{
    return importCategoryController.handle(request,response);
});

export {categoriesRoutes}