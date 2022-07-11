import mock from '@/mock/MockAdapter';

mock.onGet('/api/v1/health-check').reply(() => [200, true]);
