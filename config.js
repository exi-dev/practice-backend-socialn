require('dotenv').config()

module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api:{
        port: process.env.API_PORT || 3000
    },
    post:{
        port:process.env.POST_PORT || 3001
    },
    jwt:{
        secret:process.env.JWT_SECRET 
    },
    mysql:{
        host:process.env.MYSQL_HOST ,
        user:process.env.MYSQL_USER ,
        password:process.env.MYSQL_PASS ,
        database:process.env.MYSQL_DB
    },
    mysqlService:{
        port:process.env.MYSQL_SRV_PORT || 3002,
        host:process.env.MYSQL_SRV_HOST || 'localhost'
    },
    cacheService:{
        port:process.env.MYSQL_SRV_PORT || 3003,
        host:process.env.MYSQL_SRV_HOST || 'localhost'
    },
    redis: {
        host:process.env.REDIS_HOST ,
        port:process.env.REDIS_PORT,
        password:process.env.REDIS_PASS
    }
}
