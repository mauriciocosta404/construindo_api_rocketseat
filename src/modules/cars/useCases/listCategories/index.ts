
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoriesController } from './ListCategoriesController';
import { CategoryRepositories } from '../../repositories/implementations/CategoryRepositories';

const categorieRepository=CategoryRepositories.getInstance();
const listCategoriesUseCase=new ListCategoriesUseCase(categorieRepository);
const listCategoriesController=new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};
