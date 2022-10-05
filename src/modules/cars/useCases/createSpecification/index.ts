import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { CreateCategoryController } from '../createCategory/CreateCategoryController';
import { CreateSpecificationController } from './CreateSpecificationController';

const specificationsRepository=new SpecificationsRepository();
const createSpecificationUseCase=new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController=new CreateSpecificationController(createSpecificationUseCase);

export {createSpecificationController};