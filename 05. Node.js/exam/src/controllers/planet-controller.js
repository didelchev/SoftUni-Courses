import { Router } from "express";
import planetService from "../services/planetService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const planetController = Router();

planetController.get('/', async (req,res) =>{

    const planets = await planetService.getAll().lean();
    res.render("planet/catalog", { planets, title: "Catalog Page" })
})

planetController.get('/create', (req,res) => {
    res.render('planet/create')
})

planetController.post('/create', async (req,res) => {
    const planetData = req.body;
    const userId = req.user._id;

    try {
        await planetService.create(planetData,userId)
        
        res.redirect('/planets')
    } catch (err) {
        const error = getErrorMessage(err)
        return res.render('planet/create', { planet: planetData, error, title: "Create Planet"})
    }
})

planetController.get('/:planetId/details', async (req,res) => {
    const planet = await planetService.getOne(req.params.planetId).lean();
    const isOwner = planet.owner.toString() == req.user?._id;

    res.render('planet/details',{ planet, title: 'Details', isOwner})

});

planetController.get('/:planetId/delete', async (req,res) =>{
    try {
        await planetService.remove(req.params.planetId)
        res.redirect('/planets')
    } catch (error) {
        console.log(error);
        
    }
})

planetController.get('/:planetId/edit', async (req,res) => {
    const planet = await planetService.getOne(req.params.planetId).lean();
    res.render('planet/edit', {title: "Edit", planet})
})

planetController.post('/:planetId/edit', async (req,res) => {
    const planetData = req.body;
    const planetId = req.params.planetId

    await planetService.edit(planetId, planetData)

    res.redirect(`/planets/${planetId}/details`)
})
export default planetController;