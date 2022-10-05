import { CategoryRepositories } from '../../../repositories/implementations/CategoryRepositories';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoriesController } from './ListCategoriesController';

const categorieRepository=CategoryRepositories.getInstance();
const listCategoriesUseCase=new ListCategoriesUseCase(categorieRepository);
const listCategoriesController=new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};
