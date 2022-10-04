import { Router } from "express";
import { CategoryRepositories } from "../modules/cars/repositories/CategoryRepositories";
import { PostegresCategoriesRepository } from "../modules/cars/repositories/PostegresCategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes=Router();
const categoryRepositories=new PostegresCategoriesRepository();

categoriesRoutes.post('/',(request,response)=>{
    const {name,description}=request.body;
   
    const createCategoryService=new CreateCategoryService(categoryRepositories);
    createCategoryService.execute({name,description});

    return response.status(201).send();
});

categoriesRoutes.get('/',(request,response)=>{
    const all=categoryRepositories.list();

    return response.json(all);
})

export {categoriesRoutes}