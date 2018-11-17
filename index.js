const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 *
 * @param {Object} payload Payload object requred to bind with the token.
 * @param {Object} options Options, such as `algorithm`, `expiresIn` etc.
 * @param {string} secretKey secretOrPublicKey
 */
const generate = (
  payload = {},
  options = {},
  secretKey = process.env.SECRET_KEY
) => {
  let token;
  try {
    token = jwt.sign(payload, secretKey, options);
  } catch (e) {
    token = null;
  }
  return token;
};

module.exports = generate;
