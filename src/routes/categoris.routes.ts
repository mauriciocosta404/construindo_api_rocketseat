import { Router } from "express";
import { CategoriesRepositories } from "../repositories/categoriesRepositories";

const categoriesRoutes=Router();
const categoriesRepositories=new CategoriesRepositories();

categoriesRoutes.post('/categories',(request,response)=>{
    const {name,description}=request.body;

    categoriesRepositories.create(name,description);

    return response.status(201).send();
});

export {categoriesRoutes}