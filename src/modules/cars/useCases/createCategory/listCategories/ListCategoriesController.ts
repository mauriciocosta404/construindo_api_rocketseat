import { Request,Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController{
    constructor(private listCategoryUseCase:ListCategoriesUseCase){}

    async handle(request:Request,response:Response){
        const allCategories=await this.listCategoryUseCase.execute();

        return response.json(allCategories);
    }
}