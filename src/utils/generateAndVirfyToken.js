import jwt from 'jsonwebtoken'

export const generateToken = ({
  payload = {},
  signature = process.env.TOKEN_SIGNATURE,
  expiresIn = 60 * 60,
} = {}) => {
  const tokenValue = jwt.sign(payload, signature, {
    expiresIn: parseInt(expiresIn),
  });
  return tokenValue;
};

export const verifyToken = ({
  token = {},
  signature = process.env.TOKEN_SIGNATURE,
} = {}) => {
  const decoded = jwt.verify(token, signature);
  return decoded;
};