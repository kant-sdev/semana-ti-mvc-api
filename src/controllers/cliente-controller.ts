// controllers/cliente-controller.ts
import { Request, Response } from "express";
import { ClienteSchema } from "../schemas/cliente-schema";
import { ServiceClientes } from "../services/cliente-service";

const service = new ServiceClientes();

export class ClienteController {
  async criar(req: Request, res: Response) {
    try {
      const data = ClienteSchema.parse(req.body); 
      const cliente = await service.criarCliente(data);
      res.status(201).json(cliente); 
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const clientes = await service.listarClientes();
      res.status(200).json(clientes);
    } catch (error) {
      console.error("Erro ao listar clientes:", error);
      res.status(500).json({ message: "Erro ao listar clientes." });
    }
  }
}
