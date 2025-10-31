// schemas/cliente-schema.ts
import z from "zod";

export const ClienteSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.email("E-mail inválido"),
  telefone: z.string().optional(),
});

export type ClienteInput = z.infer<typeof ClienteSchema>;
