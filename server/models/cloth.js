const mongoose = require("mongoose")
const Cloth = new mongoose.Schema({
    // id: {type: Number, required: true},
    clothType: { type: String, required: true},
    color: { type: String, required: true },
    wearCount: {type: Number, required: true },
    photoUrl: { type: String, required: true },
});

const ClothSchema = mongoose.model('Cloth', Cloth);

module.exports = { ClothSchema };
