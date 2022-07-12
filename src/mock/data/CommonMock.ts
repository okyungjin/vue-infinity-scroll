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

const students = (page: number, size: number) =>
  CommonUtils.range((page - 1) * size + 1, page * size).map(index => {
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

mock.onGet(/\/api\/v1\/students\/\d+\/\d+$/).reply(req => {
  const { page, size } = req.params;
  console.log(1, students(page, size));
  return [
    200,
    {
      ...baseResponse,
      result: {
        contents: students(page, size),
        totalPages: 10,
        totalCount: 93,
        isFirst: page === 1,
        isLast: page === 10,
        page,
        size,
        isEmpty: false,
        isFiltered: false,
        filteredElements: {},
      },
    },
  ];
});
