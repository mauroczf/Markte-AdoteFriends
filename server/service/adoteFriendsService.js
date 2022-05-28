const adotFriendsData = require('../data/adoteFriendsData');

exports.getAllAdotFriendsService = () => {
   return adotFriendsData.getAllAdotFriendsData();
};

exports.getSingleAdotFriendsIdService = (id) => {
    return adotFriendsData.getSingleAdotFriendsIdService(id);
 };

 exports.postAdotFriendsCreateService = (nome,idade) => {
   return adotFriendsData.postAdotFriendsCreateData(nome,idade)
};

exports.putAdotFriendsUpdateService = (dado) => {
   return adotFriendsData.putAdotFriendsUpdateData(dado)
};

exports.putAdotFriendsUpdateIdService = (dado,id) => {
   return adotFriendsData.putAdotFriendsUpdateIdData(dado,id)
};

exports.deleteAdotFriendsRemoveService = () => {
   return adotFriendsData.deleteAdotFriendsremoveData()
};

exports.deleteAdotFriendsRemoveIdService = (id) => {
   return adotFriendsData.deleteAdotFriendsRemoveIdData(id)
};