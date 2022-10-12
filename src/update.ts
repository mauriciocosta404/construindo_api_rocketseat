import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient();

const main= async ()=>{
    const result = await prisma.courses.update({
        where:{
            id:"827d8706-37e0-49b7-b821-a4c1df0330d9"
        },
        data:{
            duration:300
        }
    });
    console.log(result);
}

main();
