import connectDB from "../../../components/common/utils/mongo/middleware";
import CartDB from "../../../components/common/utils/mongo/model/cart";

const handler = async (req, res) => {
    const CartObject = new CartDB({
        userId: req.body.userId,
        books: req.body.books
      });
    
      try{
        const cartData = await CartObject.save(CartObject);
        return res.status(201).json(cartData);
      }
      catch(err){
        return res.status(500).json(new Error(err).message);
      }
};

export default connectDB(handler);