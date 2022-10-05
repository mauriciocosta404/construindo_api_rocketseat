import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateEspecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoute=Router();

const specificationsRepository=new SpecificationsRepository();

specificationsRoute.post('/',(request,response)=>{
    const {name,description}=request.body;
    const createSpecificationsService=new CreateEspecificationService(specificationsRepository);

    createSpecificationsService.execute({name,description});

    return response.status(201).json({message:'created'});
});

export {specificationsRoute}