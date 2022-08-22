import connectDB from "../../../components/common/utils/mongo/middleware";
import CartDB from "../../../components/common/utils/mongo/model/cart";

const handler = async (req, res) => {
    let cart = await CartDB.findById(req.query.id);

    if(cart){
      try{
        const cart = await CartDB.findByIdAndDelete(req.query.id)
        return res.status(200).send(cart)
      }
      catch(err){
        return res.status(500).send(new Error(err).message);
      }
    }else{
      return res.status(500).send("Cart does not exist");
    }
};

export default connectDB(handler);