const db=require("../config/database")

exports.createProduct=async(req,res)=>{

    const {productName,quantity,price}=req.body;
    const {rows}=await db.query(
        "INSERT INTO products (productName,quantity,price) Values ($1,$2,$3)",
        [productName,quantity,price]
    )
    res.status(201).send({
        message:"Product successfully added",
        body:{
            product:{
                productName,quantity,price
            }
        }
    })
}
// get Product Data
exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY productName ASC');
    res.status(200).send(response.rows);
  };
  //get list product by id
  exports.findProductById=async(req,res)=>{
    const productId=parseInt(req.params.id);
    const response=await db.query('select * from products where productid=$1',[productId]);
   

    res.status(200).send(response.rows)
  }
  //update Product by id
exports.updateProductById=async(req,res)=>{
    const productId=parseInt(req.params.id);
    const{productName,quantity,price}=req.body;
    const response=await db.query('Update products set productName=$1,quantity=$2,price=$3 where productId=$4',
       [productName,quantity,price,productId]
    )
    res.status(200).send({message:"Product Updated Successfully!"})
}
exports.deleteProductById=async(req,res)=>{
    const productId=parseInt(req.params.id);
    await db.query('Delete from products where productId=$1',[productId])
    res.status(200).send({message:"Product Deleted Successfully",productId})
   

}