import Mongoose from "mongoose";

const sdrSchema = Mongoose.Schema({
    pno: Number,
    custmer_name : String,
    home_name:String,
    home_place:String,
    city1:String,
    city2:String,
    pin:Number,
    proof_type:String,
    proof_number:String

});

const Item = Mongoose.model('item', sdrSchema);

export default Item;