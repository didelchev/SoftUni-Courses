import * as request from "./requester";


const BASE_URL = "http://localhost:3030/jsonstore/dogs"

export const getAll =  async () => { 
    const result = await request.get(BASE_URL);
     
    const dogData = Object.values(result);

    return dogData
}
 

export const getOne = async () => {
    
}