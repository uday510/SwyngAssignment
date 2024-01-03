const reservationController = require("../controllers/reservation.controller");
const { authUser } = require("../middlewares/");

module.exports = (app) => {
  app.post("/api/reserve", [authUser.isValid], reservationController.createReservation);
}