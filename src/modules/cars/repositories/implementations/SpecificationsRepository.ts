import { Specification } from "../../model/Specification";
import { ISpecificationsRepository,ICreateSpecificationDTO } from "../ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository{
    private specifications:Specification[];

    constructor(){
        this.specifications=[];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification= new Specification();

        Object.assign(specification,{
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification | null{
        const specification=this.specifications.find(
            (specification)=>specification.name===name
        );
        return specification ?? null;
    }

}