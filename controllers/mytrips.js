import mongoose from 'mongoose';
import mytrips from '../models/Trip-Schema.js';

export const getMytrips = (req, res) => {
    mytrips.find((err, data) => {
        if (err) res.status(500).send(err)
        else res.status(200).send(data)
    })
}

export const createTrip = (req, res) => {
    const post = req.body;
    mytrips.create(post, (err, data) => {
        if (err) response.status(500).send(err)
        else res.status(201).send(data)
    })
}

export const updateTrip = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such Post');

    const updatedTrip = await mytrips.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedTrip);
}

export const deleteTrip = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such Post');

    await mytrips.findByIdAndDelete(_id);

    res.json({ message: "Post Deleted Successfully!" });
}