
import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import notFound from './middleware/notFound';
import globalErrorHandler from './middleware/globalErrorHandler';


const app = express();


app.use(express.json());
app.use(cors());


app.use('/api/v1', router)


app.get('/', async (req: Request, res: Response) => {
    return res.status(200).json({
        server: "server is running"
    });
})

app.get('/test', async (req: Request, res: Response) => {
    return res.status(200).json({
        test: "You are now test api "
    });
})


app.use(notFound)

app.use(globalErrorHandler)

export default app