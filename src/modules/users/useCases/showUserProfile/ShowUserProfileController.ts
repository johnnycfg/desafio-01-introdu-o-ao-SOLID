import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      this.showUserProfileUseCase.execute({ user_id });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}

export { ShowUserProfileController };
