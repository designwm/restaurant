import express from 'express'

const router = express.Router();

import Menu from './../models/menu.js';

router.post('/', async (req, res) => {
    try{
        const data = req.body;
    const newMenu = new Menu(data);
    const saveMenu = await newMenu.save();
    res.status(201).json({
        message: "Data succesfully insert",
        data: saveMenu
    });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
    
});

router.get('/', async (req, res) => {
    try{
        const data = await Menu.find();
        console.log("data fetch");
        res.status(200).json({data});

    }catch(err){
        console.log(err);
        res.status(500).json({err: "fetch failed"});
    }
    
});

router.put('/:id', async (req, res) => {
    try{
        const menuId = req.params.id;
        const updatedmenuData = req.body;

        const responce = await Menu.findByIdAndUpdate(menuId, updatedmenuData, {
            new: true,
            runValidators: true
        });

        if(!responce) {
            res.status(404).json(responce);
        }

        console.log(responce);
        res.status(200).json(responce);

    }catch(err){
        console.log(err);
    }
});

// router.put('/:id', async (req, res) => {
//     try{
//         const menuId = req.params.id;
//     const updatedmenuData = req.body;

//     const responce = await Menu.findByIdAndUpdate(menuId, updatedmenuData, {
//         new: true,
//         runValidators: true
//     });
//     if(!responce){
//         res.status(404).json({error: "Invalid"});
//     }
//     console.log(responce);
//     res.status(200).json(responce);
//     }catch(err){
//         console.log(err);
//     }
    
// });

export default router;