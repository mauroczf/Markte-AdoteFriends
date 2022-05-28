const express = require('express');
const router = express.Router();
const adotFriendsService = require('../service/adoteFriendsService');

router.get('/viewadotefriends',  async (req, res) => {
    try{
        const teste = await adotFriendsService.getAllAdotFriendsService();
        res.json(teste);
    }catch(err){
            console.log(err);
    }
});

router.get('/viewadotefriends/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const teste =  await adotFriendsService.getSingleAdotFriendsIdService(id);
         res.json(teste);
    }catch(err){
        console.log(err);
    }
});

router.post('/createadotefriends', async (req, res) => {
    try{
        const { nome } = req.body.nome;
        const { idade } = req.body.idade;
        // const dado = ["Ruan",25];
        const teste =  await adotFriendsService.postAdotFriendsCreateService(nome,idade);
         res.json(teste);
    }catch(err){
        console.log(err);
    }
});

router.put('/updateadotefriends', async (req, res) => {
    try{
        // const { nome } = req.body.nome;
        // const { idade } = req.body.idade;
        const dado = ["Kiron",65];
        const teste =  await adotFriendsService.putAdotFriendsUpdateService(dado);
         res.json(teste);
    }catch(err){
        console.log(err);
    }
});

router.put('/updateaadotefriends/:id', async (req, res) => {
    try{
        const dado = ["Paulo",25];
        const { id } = req.params;
        // const { nome } = req.body.nome;
        // const { idade } = req.body.idade;
        const teste =  await adotFriendsService.putAdotFriendsUpdateIdService(dado,id);
         res.json(teste);
    }catch(err){
        console.log(err);
    }
});

router.delete('/deleteadotefriends', async (req, res) => {
    try{
        const teste =  await adotFriendsService.deleteAdotFriendsRemoveService();
         res.json(teste);
    }catch(err){
        console.log(err);
    }
});

router.delete('/deleteadotefriends/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const teste =  await adotFriendsService.deleteAdotFriendsRemoveIdService(id);
         res.json(teste);
    }catch(err){
        console.log(err);
    }
});


module.exports = router;