export const getByStatus = <T>(
  request: PromiseSettledResult<T>,
  status: PromiseFulfilledResult<T>['status'],
): request is PromiseFulfilledResult<T> => request.status === status;
