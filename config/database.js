const Pool=require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    password:"Prashant@1997",
    host:"localhost",
    port:5432,
    database:"CRUD_Nodejs"
})
pool.on('connect', () => {
    console.log('connection successfully');
  });
  
module.exports=pool;