import bcrypt from 'bcrypt'

export const hash = ({ planText = "", saltRound = process.env.SALT_ROUND } = {}) => {
  const result = bcrypt.hashSync(planText, parseInt(saltRound))
  return result
}


export const compare = ({planText,hashValue} = {}) => {
  const match = bcrypt.compareSync(planText,hashValue);
  return match;
};