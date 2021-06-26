import express from "express";

const app = express();
const port = 9004;

app.get('/', (req, res) => {
    res.send('Backend is working on 🚀🎊');
})


app.listen(port, () => console.log(`listening on ${port}`));