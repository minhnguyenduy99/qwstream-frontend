import { ApiCaller } from "./api-caller";
import HttpCode from "./http-consts";

export class AuthApi extends ApiCaller {
  static PATHS = {
    login: "/login/official-auth"
  };

  async login(loginInfo) {
    try {
      const form = new FormData();
      form.append("username", loginInfo.username);
      form.append("password", loginInfo.password);
      const res = await this._context.post(
        `${this._endpoint}${AuthApi.PATHS.login}`,
        form
      );
      return {
        data: res.data
      };
    } catch (error) {
      return {
        error: this.getErrorRepsonse(error).message
      };
    }
  }
}
