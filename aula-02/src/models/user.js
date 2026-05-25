import { DataTypes} from "sequelize";
import { sequelize } from "../database/configuration.js";

const User = sequelize.define("User", {
    name:{
        type: DataTypes.STRING,
    },
    lastName:{
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATEONLY,
    },
    gender:{
        type: DataTypes.STRING,
    },
    status:{
        type: DataTypes.ENUM(['active', 'block', 'inactive']),
        defaultValue: 'inactive'
    }


})

export default User