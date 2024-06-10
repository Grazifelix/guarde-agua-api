const app = require('./app');

const port = 3000;

app.listen(port, () => {
    console.log(`Server Listen on Port http://localhost:${port}`);
});

app.get("/", (req, res)=>{
    res.send("Hello World!! TESTE@@")
})