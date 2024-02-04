type ServiceResponseSuccessType = 'SUCCESSFUL' | 'CREATED';
type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessType, 
  data: T
};

export type ServicesTypes<T> = ServiceResponseError | ServiceResponseSuccess<T>;