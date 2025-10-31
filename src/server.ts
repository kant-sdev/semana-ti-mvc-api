import express, { type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import { MainRouter } from './routers/main';

const server = express();
server.use(cors());

server.use(express.json());

server.use(MainRouter.pref, MainRouter.route);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err),
  res.status(500).json({
    error: 'Erro Interno do Servidor'
  })
});

const PORT = process.env.PORT ?? 3001
server.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}/v1/api/`)
})