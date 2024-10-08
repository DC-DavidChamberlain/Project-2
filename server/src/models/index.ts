import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { VehicleFactory } from './vehicle.js';
import { AlertsFactory } from './alerts.js';

const User = UserFactory(sequelize);
const Vehicle = VehicleFactory(sequelize);
const Alerts = AlertsFactory(sequelize);

export { User, Vehicle, Alerts };
