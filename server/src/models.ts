import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:'); // Example database

// Admin Model
interface AdminAttributes {
  id: number;
  email: string;
  password: string;
  secretCode: string;
}

interface AdminCreationAttributes extends Optional<AdminAttributes, 'id'> {}

class Admin extends Model<AdminAttributes, AdminCreationAttributes> implements AdminAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public secretCode!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secretCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Admin',
  }
);

// MockDonations Model
interface MockDonationAttributes {
  id: number;
  firstName: string;
  surname: string;
  message: string;
  amount: number;
}

interface MockDonationCreationAttributes extends Optional<MockDonationAttributes, 'id'> {}

class MockDonation extends Model<MockDonationAttributes, MockDonationCreationAttributes> implements MockDonationAttributes {
  public id!: number;
  public firstName!: string;
  public surname!: string;
  public message!: string;
  public amount!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

MockDonation.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'MockDonation',
  }
);

// Donor Model
interface DonorAttributes {
  id: number;
  firstName: string;
  email:string;
  surname: string;
  amount: number;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  country: string;
  postalCode: string;
  firstLineAddress: string;
  secondLineAddress?: string;
  city: string;
  hopeMessage: string;
  recurringDonations:boolean
subscribedToNewsletter: boolean
 donationsFrequency:string;
}

interface DonorCreationAttributes extends Optional<DonorAttributes, 'id'|'subscribedToNewsletter'|' pledgedAmount'|'recurringDonations'|> {}

class Donor extends Model<DonorAttributes, DonorCreationAttributes> implements DonorAttributes {
  public id!: number;
  public firstName!: string;
  public surname!: string;
  public email!: string;
  public amount!: number;
  public cardNumber!: string;
  public cvv!: string;
  public expiryDate!: string;
  public country!: string;
  public postalCode!: string;
  public firstLineAddress!: string;
  public secondLineAddress?: string;
  public city!: string;
  public hopeMessage!: string;
  public subscribedToNewsletter: boolean = false;
  public recurringDonations: boolean = false;
  public donationsFrequency:string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Donor.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiryDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstLineAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondLineAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hopeMessage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subscribedToNewsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    donationsFrequency: {
      type: DataTypes.ENUM('daily', 'weekly', 'monthly'),
      allowNull: false,
    },
    recurringDonations: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Donor',
  }
);

export { Admin, MockDonation, Donor, sequelize };
