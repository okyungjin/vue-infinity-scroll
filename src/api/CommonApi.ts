import axios from '@/plugins/AxiosPlugin';

export default class CommonApi {
  public static checkHealth(): Promise<boolean> {
    return axios.get('/api/v1/health-check').then(res => res.data);
  }
}
