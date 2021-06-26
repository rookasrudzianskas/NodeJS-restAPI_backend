import express from "express";

const app = express();
const port = process.env || 9004;

app.get('/', (req, res) => {
    res.send('Backend is working on 🚀');
})


app.listen(port, () => console.log(`listening on ${port}`));