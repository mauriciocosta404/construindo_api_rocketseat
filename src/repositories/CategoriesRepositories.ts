import { Category } from "../model/category";

// DTO data transfer object- objecto criado para transferir dados
interface ICreateCategoryDTO{
    name:string,
    description:string
}

class CategoriesRepositories{
    private categories: Category[];

    constructor(){
        this.categories=[];
    }

    create({name,description}:ICreateCategoryDTO):void{

        const category = new Category;

        Object.assign(category, {
            name,
            description,
            create_at: new Date()
        });

        this.categories.push(category);
    }
}

export {CategoriesRepositories};
