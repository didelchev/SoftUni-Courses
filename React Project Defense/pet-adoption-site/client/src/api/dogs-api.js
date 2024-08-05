import * as request from "./requester";


const BASE_URL = "http://localhost:3030/data/dogs"

export const getAll =  async () => { 
    const result = await request.get(BASE_URL);
     
    const dogData = Object.values(result);

    return dogData
}
 

export const getOne =  (id) => request.get(`${BASE_URL}/${id}`)


export const create = (dogData) => request.post(`${BASE_URL}`, dogData)



const dogsAPI = {
    getAll,
    getOne,
    create
}


export default dogsAPI