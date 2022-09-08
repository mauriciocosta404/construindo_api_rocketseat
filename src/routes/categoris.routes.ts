import { Router } from "express";
import { CategoryRepositories } from "../repositories/CategoryRepositories";

const categoriesRoutes=Router();
const categoryRepositories=new CategoryRepositories();

categoriesRoutes.post('/',(request,response)=>{
    const {name,description}=request.body;
    const categoryAlreadyExists=categoryRepositories.findByName(name);
    
    if(categoryAlreadyExists){
        return response.status(400).json({error:'category already exists' })
    }

    categoryRepositories.create({description,name});

    return response.status(201).send();
});

categoriesRoutes.get('/',(request,response)=>{
    const all=categoryRepositories.list();

    return response.json(all);
})

export {categoriesRoutes}