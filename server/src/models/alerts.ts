import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { User } from './user.js';

interface AlertAttributes {
    id: number;
    type: string
    snow?: string;
    
    message: string;
    severity: string;
}

interface AlertCreationAttributes extends Optional<AlertAttributes, 'id'> { }

class Alerts extends Model<AlertAttributes, AlertCreationAttributes> implements AlertAttributes {
    public id!: number;
    public type!: string;
    public snow! : string;
    public message!: string;
    public severity!: string;
    public readonly assignedUser?: User;
}
export function AlertsFactory(sequelize: Sequelize): typeof Alerts {
    Alerts.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        snow: {   
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        severity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "alerts",
        sequelize,

    }
);
    return Alerts;
}