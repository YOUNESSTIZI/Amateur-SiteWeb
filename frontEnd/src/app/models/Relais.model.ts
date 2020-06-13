export class Relai {
  _id: string;
  region: string;
  latitude: number;
  longitude: number;
  site: string;
  freqTx: number;
  shift: number;
  tone: number;
  mode: string;
  locator: string;

  constructor(region: string, latitude: number, longitude: number, site: string, freqTx: number, shift: number, tone: number, mode: string,  locator: string) {

    this.region = region;
    this.latitude = latitude;
    this.longitude = longitude;
    this.site = site;
    this.freqTx = freqTx;
    this.shift = shift;
    this.tone = tone;
    this.mode = mode;
    this.locator = locator;
  }

}
