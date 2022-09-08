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

        this.categories.push(category);
    }

    list():Category[] {
        return this.categories;
    }

    findByName(name:string):Category |any {
        const category=this.categories.find((category)=>category.name===name);
        
        return category;
    }
}

export {CategoryRepositories};
