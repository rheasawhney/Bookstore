import connectDB from "../../../components/common/utils/mongo/middleware";
import CartDB from "../../../components/common/utils/mongo/model/cart";


const handler = async (req, res) => {
    CartDB.find((err, data) => {
    return res.json(data)
  })
};

export default connectDB(handler);