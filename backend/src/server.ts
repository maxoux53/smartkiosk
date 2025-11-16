import express, { Request, Response, Express } from "express";
import { default as Router } from "./routes/index.ts";
import "dotenv/config";

const app : Express = express();
const port : number = parseInt(process.env.PORT || '3001');

app.use(express.json()); // Middleware pour parser le JSON des requêtes
app.use(Router); // Monte le routeur (chaque requête passera à travers lui)

app.get(
    '/',
    (req: Request, res: Response) : void => {
        res.send('Hello World!');
    }
);

/* Équivalent à :
app.get(
    '/',
    function (req, res) {
        res.send('Hello World!');
        }
);

** ou encore à : **

function gèreLaRequete(req, res) {
    res.send('Hello World!');
}

app.get('/', gèreLaRequete);
*/

app.listen(port, () : void => {
    console.log(`http://localhost:${port}`);
});
