import axios from '@/plugins/AxiosPlugin';
import { BasePaginationRequest } from '@/model/BaseModel';
import { RetrieveStudentsPaginationResponse } from '@/model/CommonModel';

export default class CommonApi {
  public static checkHealth(): Promise<boolean> {
    return axios.get('/api/v1/health-check').then(res => res.data);
  }

  public static retrieveStudents(request: BasePaginationRequest): Promise<RetrieveStudentsPaginationResponse> {
    console.log(`/api/v1/students/${request.page}/${request.size}`);
    return axios
    .get(`/api/v1/students/${request.page}/${request.size}`, { params: request })
    .then(res => res.data);
  }
}
