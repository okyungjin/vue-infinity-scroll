import axios from '@/plugins/AxiosPlugin';
import { RetrieveStudentsRespone } from '@/model/CommonModel';

export default class CommonApi {
  public static checkHealth(): Promise<boolean> {
    return axios.get('/api/v1/health-check').then(res => res.data);
  }

  public static retrieveStudents(): Promise<RetrieveStudentsRespone> {
    return axios.get('/api/v1/students').then(res => res.data);
  }
}
