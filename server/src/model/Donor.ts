import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Donor extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public donationAmount!: number;
  public donationFrequency!: 'monthly' | 'one-time';
  public paymentDetails!: string;
  public hasPaid!: boolean;
}

Donor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    donationAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    donationFrequency: {
      type: DataTypes.ENUM('monthly', 'one-time'),
      allowNull: false,
    },
    paymentDetails: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hasPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Donor',
    tableName: 'donors',
  }
);

export default Donor;
