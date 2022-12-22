import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let userId: string;

    if (typeof user_id === "string") {
      userId = user_id;
    }

    try {
      const users = this.listAllUsersUseCase.execute({ user_id: userId });

      return response.status(201).json(users);
    } catch (error) {
      return response.status(400).json({ error: "mensagem do erro" });
    }
  }
}

export { ListAllUsersController };
