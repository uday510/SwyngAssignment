const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  slot: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    default: 'Pending', 
  },
 
}, { timestamps: true });


const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
