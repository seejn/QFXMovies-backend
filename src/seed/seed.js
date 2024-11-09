import fs from "fs/promises";
import path from "path";
import { pathToFileURL } from 'url';

import dotenv from "dotenv";
import connectDB from "../config/database.js";

dotenv.config();
const modelPath = path.join(process.cwd(), "src", "models");
const dataPath = path.join(process.cwd(), "src", "seed", "data");

const seed = async (model, data) => {
    await model.deleteMany({})
    
    try{
        await model.insertMany(data)
        return true;
    }catch(error){
        console.log("error seeding...", error);
        process.exit(1);
    }
}

const importAllFiles = async () => {
    try{
        const datas = await fs.readdir(dataPath);
        console.log("Data to seed:  ", datas);
        await connectDB();

        for(const data of datas){
            if(path.extname(data) === ".js"){
                const dataStore = await import(pathToFileURL(
                    path.join(dataPath, data)
                ).href);
                
                if(!dataStore.default.model){
                    console.log("model not found");
                    break;
                }
                const model = await import(pathToFileURL(
                    path.join(modelPath, dataStore.default.model+'.js')
                ).href);
                console.log(`Seeding ${dataStore.default.model} model...`);
                if(await seed(model.default, dataStore.default.data)){
                    console.log(`${dataStore.default.model} seeding completed \n`);
                }
            }
        }
        process.exit(1);
    }catch(error){
        console.log(error);
    }
}

importAllFiles();