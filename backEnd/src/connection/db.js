const Sequelize = require("sequelize");

    const sequelize = new Sequelize(
        "lifestory",
        "root",
        "rootroot",
        {
            dialect: 'mysql',
            host:"localhost",
            port:3306
        }
    )

    module.exports = sequelize;



else {
    console.log("STAGING");
    const sequelize = new Sequelize(
        process.env.DATABASE_NAME_TESTE,
        process.env.DATABASE_USERNAME_TESTE,
        process.env.DATABASE_PASSWORD_TESTE,
        {
           dialect:'mysql',
           host:process.env.DATABASE_HOST_TESTE,
           port:process.env.DATABASE_PORT_TESTE
        }
    )
    
    module.exports = sequelize;
}

