// routers/mesas/mesa-routes.ts
import { Router } from "express";
import { MesaController } from "../../controllers/mesa-controller";

const router = Router();
const controller = new MesaController();


router.get("/mesas", controller.listar.bind(controller));   
router.post("/mesas", controller.criar.bind(controller));   

export default router;
