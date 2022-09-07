import express from 'express';
import { categoriesRoutes } from './routes/categoris.routes';
const app=express();
app.use(express.json());

app.use('/categories',categoriesRoutes);

app.listen(3333,()=>{
    console.log(`servidor rodando em http://localhost:${3333}`);
});
