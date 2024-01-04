const Reservation = require('../models/reservation.model');

const createReservation = async (req, res) => {
  try {
    const { name, email, phone, slot } = req.body;

    if (!name || !email || !phone || !slot) {
      return res.status(500).json({ error: "Required fields are missing." })
    }

    // console.log("Body -->", req.body);

    const newReservation = new Reservation({ name, email, phone, slot });

    // console.log("Success --> ", newReservation);

    const savedReservation = await newReservation.save();

    // console.log("Success --> ", savedReservation);

    res.status(201).json(savedReservation);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'An error occurred while creating the reservation' });
  }
};

module.exports = {
  createReservation
};
