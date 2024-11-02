import Planet from "../models/Planet.js"

const planetService = {
    getAll(){
        return Planet.find();
    },
    create(planetData, userId){
        return Planet.create({...planetData, owner: userId})
    },
    getOne(planetId){
        return Planet.findById(planetId)
    },
    remove(planetId){
        return Planet.findByIdAndDelete(planetId)
    },
    edit(planetId, planetData){
        return Planet.findByIdAndUpdate(planetId, planetData)
    }
}

export default planetService;