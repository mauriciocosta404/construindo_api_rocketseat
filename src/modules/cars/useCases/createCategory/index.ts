import { CategoryRepositories } from "../../repositories/implementations/CategoryRepositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryRepositories=new CategoryRepositories();
const createCategoryUseCase=new CreateCategoryUseCase(categoryRepositories);
const createCategoryController=new CreateCategoryController(createCategoryUseCase);

export {createCategoryController};