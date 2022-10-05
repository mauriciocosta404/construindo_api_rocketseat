import { ISpecificationsRepository, ICreateSpecificationDTO } from '../../repositories/ISpecificationsRepository';

export class CreateSpecificationUseCase{
    constructor(private specificationsRepository: ISpecificationsRepository){}
    async execute({name,description}:ICreateSpecificationDTO){
        const specificationAlreadyExists= this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description
        });   
    }
}