export type ResponseStatus = 'success' | 'fail';

export type Language = 'ko';

export interface ErrorResponse {
  errorCode: string;
  debugMessage: string;
  field?: string;
}

export interface BaseResponse {
  result: unknown;
  message: string;
  status: ResponseStatus;
  responseZoneId: string;
  responseLanguage: Language;
  error?: ErrorResponse;
}

export interface BasePaginationRequest {
  page: number;
  size: number;
}

export interface BasePaginationResultResponse {
  contents: unknown;
  totalPages: number;
  totalCount: number;
  isFirst: boolean;
  isLast: boolean;
  page: number;
  size: number;
  isEmpty: boolean;
  isFiltered: boolean;
  filteredElements: object;
}
