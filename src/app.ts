import 'express-async-errors';
import express, { Express} from 'express';
import dotenv from 'dotenv'
import routers from './routes';
import { handleApplicationErrors } from './middlewares/error-handling-middleware';

dotenv.config()
const app = express();

app.use(express.json())
app.use(routers)
app.get('/health', (_req,res) => res.send('ok!'))
app.use(handleApplicationErrors)

export default app