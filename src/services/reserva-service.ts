// services/reserva-service.ts

import { prisma } from "../lib/prisma";
import { ReservaDTO } from "../models/reserva-model";
import { ReservaInput } from "../schemas/reserva-schema";

export class ServiceReservas {
  async criarReserva(data: ReservaInput): Promise<ReservaDTO> {
    const mesa = await prisma.mesa.findUnique({
      where: { id: data.mesaId }
    });

    if (!mesa || !mesa.disponivel) {
      throw new Error('Mesa não está disponivel, já foi reservada!');
    }

    const reserva = await prisma.reserva.create({
      data,
      include: { cliente: true, mesa: true }
    });

    if (!reserva) {
      throw new Error("Não foi possivel realizar reserva")
    }

    return {
      id: reserva.id,
      dataReserva: reserva.dataReserva,
      status: reserva.status,
      clienteNome: reserva.cliente.nome,
      mesaNumero: reserva.mesa.numero,
    };
  }
  async listarReservas(): Promise<ReservaDTO[]> {
    const reservas = await prisma.reserva.findMany({
      include: {
        cliente: true,
        mesa: true,
      },
      orderBy: {
        dataReserva: "asc",
      },
    });

    return reservas.map((reserva) => ({
      id: reserva.id,
      dataReserva: reserva.dataReserva,
      status: reserva.status,
      clienteNome: reserva.cliente.nome,
      mesaNumero: reserva.mesa.numero,
    }));
  }
}