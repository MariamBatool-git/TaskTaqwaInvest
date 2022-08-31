import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'root', 'mary5376854', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;