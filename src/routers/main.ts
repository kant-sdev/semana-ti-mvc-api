import { Router } from "express";

import MesaRouter from "./mesas/mesa-route";
import ClienteRouter from "./clientes/cliente-route";
import ReservaRouter from "./reservas/reserva-router";

const router = Router();

router.get('/check', (req, res) => {
  res.json({
    message: 'Tudo funcionando nesse bagulho'
  })
})

router.use(MesaRouter);
router.use(ClienteRouter);
router.use(ReservaRouter);

export const MainRouter = {
  pref: '/v1/api',
  route: router
}