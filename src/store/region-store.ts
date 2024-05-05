import { makeAutoObservable } from "mobx";
import { Region, database } from "../data/db";

class RegionStore {
  region: Region = database[0];

  constructor() {
    makeAutoObservable(this);
  }

  getRegion = () => {
    return this.region;
  };

  setRegion = (obj: Region) => {
    this.region = obj;
  };
}

export default new RegionStore();
