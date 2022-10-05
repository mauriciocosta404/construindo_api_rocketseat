import { Router } from "express";
import { CategoryRepositories } from "../modules/cars/repositories/implementations/CategoryRepositories";
import { PostegresCategoriesRepository } from "../modules/cars/repositories/implementations/PostegresCategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes=Router();

categoriesRoutes.post('/',(request,response)=>{
    createCategoryController.handle(request,response);
});

categoriesRoutes.get('/',(request,response)=>{
    listCategoriesController.handle(request,response);
})

export {categoriesRoutes}