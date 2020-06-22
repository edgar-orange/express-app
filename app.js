const express = require('express')
const superagent = require("superagent");
const app = express()
const port = 3000
const x = {
    book: "test",
    year: 129
};

app.get('/', async ({ query: { id } }, res) => {
    try {
        const { body: { name, gender, height } } = await superagent.get("https://swapi.dev/api/people/1");

        res.json({ name, gender, height })
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
