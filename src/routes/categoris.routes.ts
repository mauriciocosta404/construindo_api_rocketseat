import { Router } from "express";
import { Category } from "../model/category";

const categoriesRoutes=Router();
const categories:Category[]=[];

categoriesRoutes.post('/categories',(request,response)=>{
    const {name,description}=request.body;

    const category=new Category; 
    
    Object.assign(category,{
        name,
        description,
        create_at:new Date()
    });

    categories.push(category);
    return response.status(201).send(categories);
});

export {categoriesRoutes}