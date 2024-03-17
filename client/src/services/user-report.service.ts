import axios from "axios";
import type {UserModel} from "@/models/user.model";

export class UserReportService {
  private apiUrl: string = 'http://localhost:3000/'
  
  public async get(term?: String) {
    return axios.get<UserModel[]>(`${this.apiUrl}?term=${term ? term : ""}`)
      .then(value => value.data);
  }
}