import axios from "axios";

let _api;
let _context;

export default class ApiContextPLugin {
  constructor({ context = axios, endpoint, useFactory }) {
    _context = context;
    _api = useFactory({ context, endpoint });
  }

  install(Vue, { key }) {
    Vue[`${key}`] = _api;
  }

  /**
   * @returns {APIFactory}
   */
  get API() {
    return _api;
  }
}
