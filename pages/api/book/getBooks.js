import connectDB from "../../../components/common/utils/mongo/middleware";
import BookDb from "../../../components/common/utils/mongo/model/book";


const handler = async (req, res) => {
    BookDb.find((err, data) => {
      console.log("proof",data)
    return res.json(data)
  })
};

export default connectDB(handler);