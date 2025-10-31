// controllers/mesa-controller.ts
import { Request, Response } from "express";
import { MesaSchema } from "../schemas/mesa-schema";
import { ServiceMesas } from "../services/mesa-service";

const service = new ServiceMesas();

export class MesaController {
  async criar(req: Request, res: Response) {
    try {
      const data = MesaSchema.parse(req.body); 
      const mesa = await service.criarMesa(data);
      res.status(201).json(mesa); 
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const mesas = await service.listarMesas();
      res.json(mesas); 
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
