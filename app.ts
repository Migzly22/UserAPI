import express, {Express, Response, Request, Application} from "express"

import RouterMiddleware from "./middleware/middleware"
import userRoute from "./routes/users"
import cors from 'cors';
import authRoute from "./routes/authentication";


const port:Number = 6030
const app: Application = express()

const start = async (app: Application) => {
    app.use(cors());
    app.use(express.json())
    app.get("/", (req: Request, res: Response)=>{
        try {
            res.status(200).json("Rest API SERVER READY")
        } catch (error) {
            res.status(500).json(error)
        }
    })

    app.use('/authenticate',authRoute)
    app.use(RouterMiddleware.routerMiddleware)
    app.use('/users',userRoute)
    app.listen(port,()=>{
        console.log(`REST API SERVER READY AT http:localhost:${port}`);
    })
}



start(app)
