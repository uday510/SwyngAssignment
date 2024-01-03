isValid = (req, res, next) => {
  const { name, email, phone, slot } = req.body;
  if (!name) {
    return res.status(500).json({ error: "name is missing." })
  }

  if (!email) {
    return res.status(500).json({ error: "email is missing." })
  }
  if (!phone) {
    return res.status(500).json({ error: "phone is missing." })
  }
  if (!slot) {
    return res.status(500).json({ error: "slot is missing." })
  }
  next();
}

const authUser = {
  isValid: isValid
}
module.exports = authUser;