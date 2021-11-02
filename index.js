const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const saveScore = require('./routes/savePlayer');
const register = require('./routes/registerPlayer');
const login = require('./routes/loginPlayer');
const bestPlayre = require('./routes/getBestPlayers');

const app = express();
const connectionUrl ="mongodb://root:aU5s24zGL2S3lIJd@cluster0-shard-00-00.d0cle.mongodb.net:27017,cluster0-shard-00-01.d0cle.mongodb.net:27017,cluster0-shard-00-02.d0cle.mongodb.net:27017/player_db?ssl=true&replicaSet=atlas-m8k1ck-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(connectionUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected");
}).catch(err=>{
    console.log(err);
});


//Midelware
app.use(express.json());
app.use(cors());

app.use("/api/save",saveScore);
app.use("/api/register",register);
app.use("/api/login",login);
app.use("/api/getbestplayers",bestPlayre);

app.listen(9090,()=> console.log('Listining on port 9090...'));

