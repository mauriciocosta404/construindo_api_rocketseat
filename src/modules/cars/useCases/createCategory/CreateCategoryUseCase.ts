import { CategoryRepositories } from "../../repositories/implementations/CategoryRepositories";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name:string;
    description:string;
}

class CreateCategoryUseCase{
    constructor(private categoryRepositories:ICategoriesRepository){

    } 
    execute({name,description}:IRequest):void{

        const categoryAlreadyExists = this.categoryRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("category already exists");
        }

        this.categoryRepositories.create({ description, name });
    }   
}
export {CreateCategoryUseCase};