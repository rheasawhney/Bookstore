import connectDB from "../../../components/common/utils/mongo/middleware";
import UserDb from "../../../components/common/utils/mongo/model/user";


const handler = async (req, res) => {

  const {email} = req.body
  UserDb.findOne({email:email},(err, data) => {
    return res.json(data)
  })
};

export default connectDB(handler);