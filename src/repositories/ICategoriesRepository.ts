import { Category } from "../model/category";

interface ICategoriesRepository{
    findByName(name:string):boolean;
    create(name:string,description:string):void;
    list():Category[];
}
export {ICategoriesRepository};