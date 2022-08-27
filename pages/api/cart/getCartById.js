import connectDB from "../../../components/common/utils/mongo/middleware";
import CartDB from "../../../components/common/utils/mongo/model/cart";


const handler = async (req, res) => {
    try {
        let cart = await CartDB.find({ userId : { $in  : req.body.userId}})
        return res.status(200).json(cart);
      } 
      catch (error) {
        return res.status(500).json(new Error(error).message);
      }
};

export default connectDB(handler);