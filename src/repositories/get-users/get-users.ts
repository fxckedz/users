import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/User";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "matheus",
        lastName: "oliveira",
        email: "email@email.com",
        password: "senha",
      },
    ];
  }
}
