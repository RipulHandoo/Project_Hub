
const {Client} = require("pg")

const client = new Client({
    host:"localhost",
    port:5432,
    password:"casper@21",
    database:"project_hub",
    user:"postgres"
})

client.connect()

module.exports = client