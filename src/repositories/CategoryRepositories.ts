import { Category } from "../model/category";

// DTO data transfer object- objecto criado para transferir dados
interface ICreateCategoryDTO{
    name:string,
    description:string
}

class CategoryRepositories{
    private categories: Category[];

    constructor(){
        this.categories=[];
    }

    create({description,name}:ICreateCategoryDTO):void{
        const category = new Category;

        Object.assign(category, {
            name,
            description,
            create_at: new Date()
        });

        console.log(name);

        this.categories.push(category);
    }

    list():Category[] {
        return this.categories;
    }
}

export {CategoryRepositories};
