import { AuthApi } from "./auth";
import { UserApi } from "./user";

const API_ENDPOINTS = {
  user: "/user"
};

class APIFactory {
  _options;

  user;
  auth;

  constructor(options) {
    this._options = options;
    this.user = new UserApi(this._wrapOptions(API_ENDPOINTS.user));
    this.auth = new AuthApi(this._wrapOptions());
  }

  setToken(token) {}

  _wrapOptions(module = "") {
    return {
      ...this._options,
      endpoint: this._options.endpoint + module
    };
  }
}

let api;

/**
 * @returns {APIFactory}
 */
export default options => {
  if (!api) {
    api = new APIFactory(options);
  }
  return api;
};
