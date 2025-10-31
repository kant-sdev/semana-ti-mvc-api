// services/mesa-service.ts

import { MesaInput } from "../schemas/mesa-schema";
import {Mesa, MesaDTO } from "../models/mesa-model";
import { prisma } from "../lib/prisma";

export class ServiceMesas {
  async criarMesa(data: MesaInput): Promise<MesaDTO> {
    const mesa = await prisma.mesa.create({ data });

    return {
      id: mesa.id,
      numero: mesa.numero,
      capacidade: mesa.capacidade,
      disponivel: mesa.disponivel,
      descricao: mesa.descricao ?? undefined,
    };
  }

  async listarMesas(): Promise<MesaDTO[]> {
    const mesas: Mesa[] = await prisma.mesa.findMany();
    return mesas.map(mesa => ({
      id: mesa.id,
      numero: mesa.numero,
      capacidade: mesa.capacidade,
      disponivel: mesa.disponivel,
      descricao: mesa.descricao ?? undefined,
    }));
  }
}
