import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
const specificationsRoute=Router();

specificationsRoute.post('/',(request,response)=>{
    createSpecificationController.handle(request,response);
});

export {specificationsRoute}