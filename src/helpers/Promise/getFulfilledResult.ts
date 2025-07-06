import { getByStatus } from './getByStatus';

export const getFulfilledResult = <T>(requests: PromiseSettledResult<T>[]) => {
  return requests
    .filter((element) => getByStatus(element, 'fulfilled'))
    .map((element) => element.value);
};
