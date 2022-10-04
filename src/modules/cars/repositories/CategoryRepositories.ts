import { Category } from "../modules/cars/model/category";
import { ICategoriesRepository,ICreateCategoryDTO } from "./ICategoriesRepository";

// DTO data transfer object- objecto criado para transferir dados

class CategoryRepositories implements ICategoriesRepository{

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
        
        this.categories.push(category);
    }

    list():Category[] {
        return this.categories;
    }

    findByName(name:string):boolean  {
        const category=this.categories.some((category)=>category.name===name);
        
        return category;
    }
}

export {CategoryRepositories};
