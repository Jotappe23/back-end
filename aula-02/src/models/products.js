import { DataTypes } from 'sequelize';
import { sequelize } from '../database/configuration.js';

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    costprice: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    }
    }, {
    tableName: 'products',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false,
    
}); 

export { Product };