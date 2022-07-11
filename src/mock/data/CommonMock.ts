import mock from '@/mock/MockAdapter';
import CommonUtils from '@/utils/CommonUtils';
import { BaseResponse } from '@/model/BaseModel';
import { Student } from '@/model/CommonModel';

mock.onGet('/api/v1/health-check').reply(() => [200, true]);

const baseResponse: BaseResponse = {
  result: undefined,
  message: '요청이 정상적으로 처리되었습니다.',
  status: 'success',
  responseZoneId: 'Asia/Seoul',
  responseLanguage: 'ko',
};

const students = [...Array(10).keys()].map(i => {
  const index = i + 1;
  const student: Student = {
    studyentKey: index,
    studyentId: CommonUtils.generateRandomId(),
    name: `student${index}`,
    address: `address-${index}`,
    description: `description-${index}`,
    createdDate: '2022-07-11',
    birthDate: '1996-01-03',
    age: 27,
    gender: {
      value: 'FEMALE',
      label: '여성',
    },
    sequenceNo: index,
  };
  return student;
});

mock.onGet('/api/v1/students').reply(() => [
  200,
  {
    ...baseResponse,
    result: students,
  },
]);
