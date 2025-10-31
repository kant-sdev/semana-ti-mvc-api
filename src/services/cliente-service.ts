import { prisma } from "../lib/prisma";
import { ClienteDTO } from "../models/cliente-model";
import { ClienteInput } from "../schemas/cliente-schema";

export class ServiceClientes {
  async criarCliente(data: ClienteInput): Promise<ClienteDTO> {
    const cliente = await prisma.cliente.create({ data });

    return {
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone ?? undefined,
    };
  }
  
  async listarClientes(): Promise<ClienteDTO[]> {
    const clientes = await prisma.cliente.findMany();

    return clientes.map((cliente) => ({
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone ?? undefined,
    }));
  }
}
