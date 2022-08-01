import connectDB from "../../../components/common/utils/mongo/middleware";
import QueriesDb from "../../../components/common/utils/mongo/model/queries";

const handler = async (req, res) => {
      if (!req.body) {
        return res.status(400).send({ message: "Input cannot be empty" });
      }
    
      const QueryObject = new QueriesDb({
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        name: req.body.name
      });
    
      QueryObject
        .save(QueryObject)
        .then((data) => {
          return res.send("User Inserted Succesfully",data);
        })
        .catch((err) => {
          return res.send({ message: err.message || "Error while saving data" });
        });
};

export default connectDB(handler);