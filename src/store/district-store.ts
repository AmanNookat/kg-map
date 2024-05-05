import { makeAutoObservable } from "mobx";
import { District } from "../data/db";

class DistrictStore {
  district: District | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getDistrict() {
    return this.district;
  }

  setDistrict(obj: District) {
    this.district = obj;
  }
}

export default new DistrictStore();
