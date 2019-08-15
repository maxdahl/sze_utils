const jwt = require("jsonwebtoken");

module.exports = {
  options: {
    JWT_KEY: null,
    cookieTokenName: "authToken"
  },

  verifyToken({ req, token }) {
    if (this.options.JWT_KEY === null)
      this.options.JWT_KEY = process.env.JWT_KEY;

    try {
      if (!token) token = req.headers.authorization;
      if (!token) token = req.session[this.options.cookieTokenName];

      if (token) return jwt.verify(token, this.options.JWT_KEY);
      else return null;
    } catch (err) {
      throw err;
    }
  }
};
