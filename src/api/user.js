import { ApiCaller } from "./api-caller";
import HttpCode from "./http-consts";

export class UserApi extends ApiCaller {
  static PATHS = {
    register: "/sign-up"
  };

  async register(user) {
    try {
      const form = new FormData();
      form.append("username", user.username);
      form.append("password", user.password);
      const res = await this._context.post(
        `${this._endpoint}${UserApi.PATHS.register}`,
        form
      );
      if (res.status === HttpCode.CREATED) {
        return {
          data: res.data
        };
      }
      return {
        error: res.data.message
      };
    } catch (error) {
      console.error(error);
      return {
        error: error.response.data.message
      };
    }
  }
}
