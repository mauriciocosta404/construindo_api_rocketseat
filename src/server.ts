import express from 'express';
const app = express();

app.use(express.json());

app.listen(3333, () => {
    console.log(`servidor rodando em http://localhost:${3333}`);
});


import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function main(){
    const result=await prisma.courses.create({
        data:{
            duration:200,
            name:"Curso de NodeJs",
            description:"Curso excelente de NodeJs"
        }
    })
    console.log(result);
}

main();