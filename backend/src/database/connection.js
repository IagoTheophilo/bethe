const knex =require('knex');
const configurattion =require('../../knexfile');
const connection = knex(configurattion.development);
module.exports =connection;