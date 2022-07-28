import connectDB from "../../../components/common/utils/mongo/middleware";
import UserDb from "../../../components/common/utils/mongo/model/user";

const handler = async (req, res) => {
      if (!req.body) {
        return res.status(400).send({ message: "Input cannot be empty" });
      }
    
      const UserObject = new UserDb({
        email: req.body.email,
        password: req.body.password,
        uid: req.body.uid
      });
    
      UserObject
        .save(UserObject)
        .then((data) => {
          return res.send("User Inserted Succesfully",data);
        })
        .catch((err) => {
          return res.send({ message: err.message || "Error while saving data" });
        });
};

export default connectDB(handler);