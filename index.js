import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usuarios = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    },
    {
        username: "patrick",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    },
    {
        username: "lulamolusco",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    }
]

const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "Mensagem1"
    },
    {
        username: "patrick",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "Mensagem2"
    },
    {
        username: "lulamolusco",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "Mensagem3"
    }
]

app.get("/tweets", (req,res) => {
    res.send(tweets);
})

app.post("/sign-up", (req,res) => {
    let body = req.body;
    console.log(body);
    usuarios.push({
        username: body.username,
        avatar: body.avatar
    });
    res.send(usuarios);
})

app.post("/tweets", (req,res) => {
    tweets.push({
        username: "sandy",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "Mensagem4"
    });
    res.send(tweets);
})

app.listen(5000,() => {
    console.log(chalk.bold.blue("Servidor vivo na porta 5000"));
})