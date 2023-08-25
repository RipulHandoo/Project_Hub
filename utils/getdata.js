const db = require("./DB.js");

async function fetchData(req, res) {
    try {
        const result = await db.query("SELECT * FROM test");
        res.json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while fetching data" });
    }
}


module.exports = fetchData; // Export the fetchData function
