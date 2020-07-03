/* eslint-disable class-methods-use-this */
import * as Yup from 'yup';
import Marks from '../models/Marks';

class MarkController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      longitude: Yup.number().required(),
      latitude: Yup.number().required(),
      userCreated: Yup.string().required(),
      type: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).send(new Error('description'));
    }

    const {
      title,
      longitude,
      latitude,
      userCreated,
      subtitle,
      type,
    } = await Marks.create(req.body);

    return res.json({
      title,
      longitude,
      latitude,
      userCreated,
      subtitle,
      type,
    });
  }

  async listId(req, res) {
    const list = await Marks.findAll({
      where: {
        user_created: req.params.id,
      },
    });
    res.json(list);
  }

  async list(req, res) {
    const list = await Marks.findAll();
    res.json(list);
  }
}
export default new MarkController();
