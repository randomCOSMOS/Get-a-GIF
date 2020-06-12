const express = require('express');
const datastore = require('nedb');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listning at ${port}!`));
app.use(express.static('public'));
app.use(express.json({
    limit: "1mb"
}));

const database = new datastore('recent-search.db');
database.remove({}, {
    multi: true
});
database.loadDatabase();

app.post("/server", (req, res) => {
    const data = req.body;

    database.insert(data);

    res.json({
        status: "success"
    });

});

app.get("/server", (req, res) => {
    database.find({}, (err, docs) => {
        res.json(docs);
    });
});