import Cast from '../models/Cast.js';

const getAll = () => Cast.find();

const create = (cast) => Cast.create(cast);

const getAllWithout = (casts) => {
    const castsIds = casts.map(cast => cast.cast._id);

    return Cast.find().nin('_id', castsIds);
}


export default {
    create,
    getAll,
    getAllWithout
    
}