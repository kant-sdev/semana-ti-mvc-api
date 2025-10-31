import { Router } from "express";
import { ClienteController } from "../../controllers/cliente-controller";

const router = Router();
const controller = new ClienteController();

router.get('/clientes', controller.listar)
router.post("/clientes", controller.criar.bind(controller));   

export default router;
