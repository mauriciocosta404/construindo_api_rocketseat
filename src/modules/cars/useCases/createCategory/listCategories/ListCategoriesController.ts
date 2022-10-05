import { Request,Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController{
    constructor(private listCategoryUseCase:ListCategoriesUseCase){}

     handle(request:Request,response:Response){
        const allCategories=  this.listCategoryUseCase.execute();

        return response.json(allCategories);
    }
}