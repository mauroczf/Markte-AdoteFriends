const database = require("../../Config/sql/connectingSql");

const getAdoteFtinds = async (req,res)=>{
    try{
        const teste = await database.query('SELECT * FROM tb_adote_friends');  
        res.json(teste);
    }catch(e){
       res.send("Falhou");
    }
}

export default getAdoteFtinds;