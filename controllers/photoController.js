import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    try {
      console.log("REQ BODY", req.body); // ayrıştırılmış JSON verileri
      const photo = await Photo.create(req.body);
      res.status(201).json({
        succeded: true,
        photo,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        succeeded: false,
        message: "Server Error",
        err
      });
    }
  };


  const getAllPhotos = async (req, res) => {
    try {
      const photos = await Photo.find();
      res.status(200).json({
        succeeded: true,
        photos,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        succeeded: false,
        message: "Server Error",
      });
    }
  };
  
  export { createPhoto,getAllPhotos };