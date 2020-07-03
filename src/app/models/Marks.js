import Sequelize, { Model } from 'sequelize';

class Marks extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        longitude: Sequelize.DOUBLE,
        latitude: Sequelize.DOUBLE,
        title: Sequelize.STRING,
        userCreated: Sequelize.STRING,
        subtitle: Sequelize.STRING,
        type: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Marks;
