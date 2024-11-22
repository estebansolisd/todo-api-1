import todosRoutes from './routes/todoRoutes';
import express from 'express';
import cors from 'cors';


const app = express();
const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', todosRoutes);



export default app;


