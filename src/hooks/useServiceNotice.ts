import { ServiceNotice } from '@/services/ServiceNotice';

import { useHttpService } from './useHttpService';

export const useServiceNotice = () => {
  const { httpService } = useHttpService();
  const serviceNotice = new ServiceNotice(httpService);
  return { serviceNotice };
};
