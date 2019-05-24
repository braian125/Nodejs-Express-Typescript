import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";


/**
 *
 * App
 */
class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}


/**
 * Routes
 */
class Routes {
    public routes(app): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })

        app.route('/content/:contentType')
        .get((req: Request, res: Response) => {
            console.log(req.params.contentType)
            res.status(200).send({
                message: 'content'
            })
        })
    }
}


/**
 *
 * Server
 */
const app = new App().app;

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})