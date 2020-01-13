const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listning at ${port}!`));
app.use(express.static('public'));
app.use(express.json({
    limit: "1mb"
}));

app.post("/server", (req, res) => {
    const data = req.body;

    let database = [];
    database.push(data);

    res.json({
        status: "success"
    });

});

app.get("/server", (req, res) => {
    let wys = "database[0]";
    res.json({
        wys
    })
});