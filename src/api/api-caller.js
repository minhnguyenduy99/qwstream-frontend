import { AxiosStatic } from "axios";

export class ApiCaller {
  /**
   * @type {AxiosStatic}
   */
  _context;

  /**
   * @type {String}
   */
  _endpoint;

  constructor({ context, endpoint }) {
    this._context = context;
    this._endpoint = endpoint;
  }

  getErrorRepsonse(err) {
    return err.response.data;
  }
}
