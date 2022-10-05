import { Category } from "../../model/category";
import { ICategoriesRepository,ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoryRepositories implements ICategoriesRepository{

    private categories: Category[];

    private static INSTANCE:CategoryRepositories;

    private constructor(){
        this.categories=[];
    }

    public static getInstance():CategoryRepositories{
        if(!CategoryRepositories.INSTANCE){
            CategoryRepositories.INSTANCE=new CategoryRepositories();
        }
        return CategoryRepositories.INSTANCE;
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
