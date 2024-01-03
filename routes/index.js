const reservationRoutes = require("./reservation.routes");

module.exports = (app) => {
  reservationRoutes(app)
}