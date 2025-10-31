// routers/mesas/mesa-routes.ts
import { Router } from "express";
import { ReservaController } from "../../controllers/reserva-controller";

const router = Router();
const controller = new ReservaController();

// Rotas de Mesa
router.get("/reservas", (req, res) => {
  res.json({
    message: 'Lista de reservas atualizada'
  })
});   
router.post("/reservas", controller.criar.bind(controller));   

export default router;
