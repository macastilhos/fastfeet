import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string()
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email }
    })

    if (!user) {
      return res.status(400).json({ error: 'Invalid user' });
    }
    console.log(user)
    if (!user.active) {
      return res.status(400).json({ error: 'Invalid user motivo 2' });
    }

    const checkPassword = bcrypt.compare(password, user.password_hash);
    if (!checkPassword) {
      return res.status(401).json({ error: 'Password does not valid' });
    }
    const { id, name } = user;
    console.log(authConfig)
    const token = jwt.sign(
      { id },
      authConfig.secret,
      { expiresIn: authConfig.expiresIn })

    return res.json({
      name,
      email,
      token
    });
  }
}
export default new SessionController();
