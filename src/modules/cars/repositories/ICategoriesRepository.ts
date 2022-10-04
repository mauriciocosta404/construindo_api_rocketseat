import { Category } from "../modules/cars/model/category";

interface ICreateCategoryDTO {
    name: string,
    description: string
}

interface ICategoriesRepository{
    findByName(name:string):boolean;
    create({name,description}:ICreateCategoryDTO):void;
    list():Category[];
}
export {ICategoriesRepository,ICreateCategoryDTO};