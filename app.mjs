import express from 'express';
import Database from 'better-sqlite3';
const app = express();
const db = new Database('students.db')
app.use (express.json())


app.get('/', (req,res)=>{
    res.send('Hello Wrold from Express!');
    
});

app.get('/time', (req, res) => {
    res.send(`There have been ${Date.now()} milliseconds since 1/1/70.`);
});

app.listen();

