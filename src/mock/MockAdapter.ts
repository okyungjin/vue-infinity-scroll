import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '@/plugins/AxiosPlugin';

export default new MockAdapter(axiosInstance);
