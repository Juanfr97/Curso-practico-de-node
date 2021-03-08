const store = require('../../../store/dummy');

function list (){
    const TABLA='user';
    return store.list(TABLA);
}

module.exports={
    list
}