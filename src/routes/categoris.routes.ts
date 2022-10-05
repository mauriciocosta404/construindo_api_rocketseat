import { Router } from "express";
import { CategoryRepositories } from "../modules/cars/repositories/implementations/CategoryRepositories";
import { PostegresCategoriesRepository } from "../modules/cars/repositories/implementations/PostegresCategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes=Router();
const categoryRepositories=new PostegresCategoriesRepository();

categoriesRoutes.post('/',(request,response)=>{
    createCategoryController.handle(request,response);
});

categoriesRoutes.get('/',(request,response)=>{
    const all=categoryRepositories.list();

    return response.json(all);
})

export {categoriesRoutes}