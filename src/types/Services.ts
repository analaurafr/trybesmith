export type ServiceResponseError = {
  status: number,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: number,
  data: T
};

export type ServicesTypes<T> = ServiceResponseError | ServiceResponseSuccess<T>;