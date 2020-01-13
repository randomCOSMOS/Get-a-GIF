const express = require('express');
const datastore = require('nedb');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listning at ${port}!`));
app.use(express.static('public'));
app.use(express.json({
    limit: "1mb"
}));

app.post("/server", (req, res) => {
    const data = req.body;

    let database = new datastore;
    database.push(data);

    res.json({
        status: "success"
    });

});

app.get("/server", (req, res) => {
    res.json({

    })
});