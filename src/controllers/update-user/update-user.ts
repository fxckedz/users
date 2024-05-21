import { User } from "../../models/User";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateUserRepository, UpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<UpdateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Missing Fields");
      }

      if (!id) {
        return badRequest("Missing user Id");
      }

      const allowedFields: (keyof UpdateUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];

      const notAllowedField = Object.keys(body).some(
        (key) => !allowedFields.includes(key as keyof UpdateUserParams)
      );

      if (notAllowedField) {
        return badRequest("Field not allowed");
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return ok<User>(user);
    } catch (error) {
      return serverError();
    }
  }
}
