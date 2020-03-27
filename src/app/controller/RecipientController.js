import * as Yup from 'yup';

import Recipients from '../models/Recipient';
import States from '../models/State';

class RecipientController {
  async index(req, res) {
    const recipients = await Recipients.findAll({ where: { active: true } });
    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number()
        .required()
        .min(1),
      state: Yup.string()
        .required()
        .when(s => {
          States.findOne({ where: { initials: s } });
        }),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validations fails' });
    }
    const { name, street, number, city, state, zip_code } = req.body;
    const checkRecipients = await Recipients.findOne({ where: { name: name } });
    if (!checkRecipients) {
      const recipients = await Recipients.create({
        name,
        street,
        number,
        city,
        state,
        zip_code,
      });
      return res.status(200).json(recipients);
    } else {
      return res.status(401).json({ error: 'Recipient already exist' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number()
        .required()
        .min(1),
      state: Yup.string()
        .required()
        .when(s => {
          States.findOne({ where: { initials: s } });
        }),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });
    const { name, street, number, city, state, zip_code } = req.body;
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validations fails' });
    }

    const recipients = await (await Recipients.findByPk(id)).update({
      name,
      street,
      number,
      city,
      state,
      zip_code,
    });
    if (!recipients) {
      return res.status(404).json({ error: 'Recipient does not exist' });
    }
    return res.status(200).json(recipients);
  }

  async delete(req, res) {
    const { id } = req.params;
    const recipients = (await Recipients.findByPk(id)).update({
      active: false,
    });
    if (!recipients) {
      return res.status(404).json({ error: 'Recipient not found' });
    }
    return res.status(200).json({ msg: 'Recipient is deacitved' });
  }
}
export default new RecipientController();
