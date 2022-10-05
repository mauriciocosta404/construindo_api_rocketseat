import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";

export class ListCategoriesUseCase{
    constructor(private categoriesRepository:ICategoriesRepository){  }

    execute(){
        const categories= this.categoriesRepository.list();

        return categories;
    }
}