import { BaseResponse } from '@/model/BaseModel';

export type Gender = 'MALE' | 'FEMALE';

export interface Student {
  studyentKey: number;
  studyentId: string;
  name: string;
  address: string;
  description: string;
  createdDate: string;
  birthDate: string;
  age: number;
  gender: {
    value: Gender;
    label: string;
  };
  sequenceNo: number;
}

export interface RetrieveStudentsRespone extends BaseResponse {
  result: Student[];
}
