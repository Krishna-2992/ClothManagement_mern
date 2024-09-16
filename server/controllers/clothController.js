const { ClothSchema } = require("../models/cloth")

exports.getClothes = async (req, res) => {
    try {
        const cloths = await ClothSchema.find({});
        res.status(200).json({ success: true, data: cloths });
      } catch (err) {
        res.status(500).json({ success: false, message: err });
      }
}

exports.getClothById = async (req, res) => {
    try {
      const {_id} = req.params
      console.log('inside getClothById with id: ', _id)
      const cloth = await ClothSchema.find({_id})
      res.status(200).json({ success: true, data: cloth });
    } catch (error) {
      console.log('error') 
      res.send({status: false, message: error})
    }
}

exports.createCloth = async (req, res) => {
    try {
        const { clothType, color, wearCount, photoUrl } = req.body;
        const newCloth = await ClothSchema.create({ clothType, color, wearCount, photoUrl});
        res.status(200).json({ success: true, data: newCloth });
      } catch (err) {
        res.status(500).json({ success: false, message:err});
      }
}

// Update cloth
exports.updateCloth = async (req, res) => {
  try {
    const { _id, clothType, color, wearCount, photoUrl } = req.body;

    const updatedCloth = await ClothSchema.findByIdAndUpdate(
      _id,
      { $set: { clothType, color, wearCount, photoUrl } },
      { new: true }
    );

    if (!updatedCloth) {
      return res.status(404).json({ success: false, message: 'Cloth not found' });
    }

    res.status(200).json({ success: true, data: updatedCloth });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete cloth
exports.deleteCloth = async (req, res) => {
  try {
    const { _id } = req.body;

    const deletedCloth = await ClothSchema.findByIdAndDelete(_id);

    if (!deletedCloth) {
      return res.status(404).json({ success: false, message: 'Cloth not found' });
    }

    res.status(200).json({ success: true, data: deletedCloth });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

