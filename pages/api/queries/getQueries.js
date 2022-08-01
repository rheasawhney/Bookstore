import connectDB from "../../../components/common/utils/mongo/middleware";
import QueriesDb from "../../../components/common/utils/mongo/model/queries";


const handler = async (req, res) => {
    QueriesDb.find((err, data) => {
    return res.json(data)
  })
};

export default connectDB(handler);