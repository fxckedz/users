import { IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }

  async handle() {
    try {
      //validar requisição
      //direcionar chamada para o repository
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Internal Server Error",
      };
    }
  }
}
