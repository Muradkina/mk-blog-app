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


/*   const getAPhotos = async (req, res) => {
    try {
      const photo = await Photo.findById({_id:req.params.id});
      res.status(200).render("photo" , {
        photo,
        link:"photos"
      })
    } catch (err) {
      console.error(err);
      res.status(500).json({
        succeeded: false,
        message: "Server Error",
      });
    }
  }; */


  const getPhotoById = async (req, res) => {
    try {
      const photo = await Photo.findById({_id:req.params.id});
      if (!photo) {
        return res.status(404).json({
          succeeded: false,
          message: "Photo not found",
        });
      }
      res.status(200).render("photo", {
        photo,
        link: "photos",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        succeeded: false,
        message: "Server Error",
      });
    }
  };
  

  //bütün fotografları render edilmiş hali
  const getAllPhotos = async (req, res) => {
    try {
      const photos = await Photo.find();
      res.status(200).render("photos" , {
        photos,
        link:"photos"
      })
    } catch (err) {
      console.error(err);
      res.status(500).json({
        succeeded: false,
        message: "Server Error",
      });
    }
  };
  
  export { createPhoto,getAllPhotos ,getPhotoById};


    //bütün fotografları JSON edilmiş hali

/*   const getAllPhotos = async (req, res) => {
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
  
  export { createPhoto,getAllPhotos }; */