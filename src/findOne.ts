import { PrismaClient} from '@prisma/client';

const prisma=new PrismaClient();

const main = async ()=>{
    const course=await prisma.courses.findFirst({
        take:-1
    });

    console.log(course);
}

main();