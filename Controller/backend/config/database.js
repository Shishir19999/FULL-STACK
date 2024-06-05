const dbUser = process.env.DB_USERNAME ? `${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@` : '';
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;
const dbHost = process.env.DB_HOST;
const dbPORT = process.env.DB_PORT;
const dbUri = `mongodb://${dbUser}${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

module.exports =  {
    'host': dbHost,
    'user': dbUser,
    'password':dbPassword,
    'port' : dbPORT,
    'database' : dbDatabase,
    "mongoUri": dbUri,
    mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },

};
 