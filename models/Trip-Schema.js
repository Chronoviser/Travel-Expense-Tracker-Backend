import mongoose from "mongoose";

const TripSchema = mongoose.Schema({
    tripName: String,
    from: String,
    to: String,
    travellers: [String],
    activities: [Object]
});

export default mongoose.model('mytrips', TripSchema);