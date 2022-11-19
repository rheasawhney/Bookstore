import connectDB from "../../../components/common/utils/mongo/middleware";
import UserDb from "../../../components/common/utils/mongo/model/user";

const handler = async (req, res) => {
      if (!req.body) {
        return res.status(400).send({ message: "Input cannot be empty" });
      }

      try{
        const userData = await UserDb.findOneAndUpdate({email : req.query.email }, req.body)
        return res.status(201).json(userData);
      } 
      catch (error) {
        return res.status(500).json(new Error(error).message);
      }

};

export default connectDB(handler);


