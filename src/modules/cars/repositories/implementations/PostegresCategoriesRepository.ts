import { Category } from "../../model/category";
import { ICategoriesRepository,ICreateCategoryDTO } from "../ICategoriesRepository";

class PostegresCategoriesRepository implements ICategoriesRepository{
    findByName(name: string): boolean {
        console.log(name);
        return false;
    }
    list(): Category[] {
        return [];   
    }
    create({name,description}:ICreateCategoryDTO): void {
        console.log(name,description);
    }
}

export {PostegresCategoriesRepository};