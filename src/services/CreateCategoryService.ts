import { CategoryRepositories } from "../repositories/CategoryRepositories";

interface IRequest{
    name:string;
    description:string;
}

class CreateCategoryService{
    constructor(private categoryRepositories:CategoryRepositories){

    } 

    execute({name,description}:IRequest):void{

        const categoryAlreadyExists = this.categoryRepositories.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("category already exists");
        }

        this.categoryRepositories.create({ description, name });
    }   
}
export {CreateCategoryService};