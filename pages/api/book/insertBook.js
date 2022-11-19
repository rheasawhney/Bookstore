import connectDB from "../../../components/common/utils/mongo/middleware";
import BookDb from "../../../components/common/utils/mongo/model/book";

const handler = async (req, res) => {
      if (!req.body) {
        return res.status(400).send({ message: "Input cannot be empty" });
      }
    
      const BookObject = new BookDb({
       
        _id: req.body.id,
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        price: req.body.price,
        authors: req.body.authors,
        thumbnailUrl:  req.body.thumbnailUrl,
        categories: req.body.categories,
      });
    
      BookObject
        .save(BookObject)
        .then((data) => {
          return res.send("Book Inserted Succesfully",data);
        })
        .catch((err) => {
          return res.send({ message: err.message || "Error while saving data" });
        });
};

export default connectDB(handler);

