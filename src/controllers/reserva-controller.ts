// controllers/reserva-controller.ts
import { Request, Response } from "express";
import { ReservaSchema } from "../schemas/reserva-schema";
import { ServiceReservas } from "../services/reserva-service";

const service = new ServiceReservas();

export class ReservaController {
  async criar(req: Request, res: Response) {
    try {
      const data = ReservaSchema.parse(req.body); 
      const reserva = await service.criarReserva(data);
      res.status(201).json(reserva);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const reservas = await service.listarReservas();
      res.status(200).json(reservas);
    } catch (error: any) {
      console.error("Erro ao listar reservas:", error);
      res.status(500).json({ message: "Erro ao listar reservas." });
    }
  }
}
