import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase=new ImportCategoryUseCase();
const importCategoryController=new ImportCategoryController(importCategoryUseCase);

export {importCategoryController};