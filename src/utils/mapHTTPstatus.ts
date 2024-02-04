export default function mapHTTPstatus(status: string): number {
  const statusHTTP: Record<string, number> = {
    SUCCESSFUL: 200, 
    CREATED: 201,
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
  };
  return statusHTTP[status] ?? 500;
}