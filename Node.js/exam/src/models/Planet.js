import { Schema, model, Types } from "mongoose";
import User from "./User.js";

const planetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    solarSystem: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["Inner", "Outer", "Dwarf"]
    },
    moons: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    rings: {
        type: String,
        required: true,
        enum: ["Yes", "No"]

    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
})

const Planet = model('Planet', planetSchema)

export default Planet;