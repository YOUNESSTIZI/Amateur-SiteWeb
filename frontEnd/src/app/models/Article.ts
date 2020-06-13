export class Article {
  _id: string;
  title: string;
  description: string;
  filePath: string;
  vu:number;
  creator: string;
  dateCreate: Date;
  state : string;
  dateMisAjour:Date;

  constructor(id: string, title: string, description: string, filePath: string, vu: number, creator: string, dateCreate: Date,state:string) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.filePath = filePath;
    this.vu = vu;
    this.creator = creator;
    this.dateCreate = dateCreate;
    this.state=state;

  }
}
