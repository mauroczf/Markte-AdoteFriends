const database = require('../config/mysql/db');

exports.getAllAdotFriendsData = () => {   
    return database.query('SELECT * FROM tb_adote_friends');  
}

exports.getSingleAdotFriendsIdService = (id) => {   
    return database.query('SELECT * FROM tb_adote_friends WHERE id = $1',[id]); 
}

exports.postAdotFriendsCreateData = (nome,idade) => {   
    return database.query('INSERT INTO tb_adote_friends (nome, idade) VALUES ($1,$2)',[nome,idade]); 
}

exports.putAdotFriendsUpdateData = (dado) => {   
    return database.query('UPDATE tb_adote_friends SET (nome, idade) = ($1, $2)',[dado[0],dado[1]]); 
}

exports.putAdotFriendsUpdateIdData = (dado,id) => {   
    return database.query('UPDATE tb_adote_friends SET (nome, idade) = ($1, $2) WHERE id = $3',[dado[0],dado[1],id]); 
}

exports.deleteAdotFriendsremoveData = () => {   
    return database.query('DELETE FROM tb_adote_friends'); 
}

exports.deleteAdotFriendsRemoveIdData = (id) => {   
    return database.query('DELETE FROM tb_adote_friends WHERE id = $1',[id]); 
}


