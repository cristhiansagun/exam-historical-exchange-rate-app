import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios-utils';
import { ExchangeRates } from '@/interfaces/exchange-rate-interface';

const fetchData = async (): Promise<ExchangeRates> => {

  console.log('LATEST: ', new Date())

  const ratesResponse = await axiosInstance.get('/latest.json?symbols=PHP,JPY,INR,KRW,SGD,MYR');
  const currencyResponse = await axiosInstance.get('/currencies.json?symbols=PHP,JPY,INR,KRW,SGD,MYR');
  
  const ratesData = ratesResponse.data;
  const currencyData = currencyResponse.data;

  const rates: any = Object.entries(ratesData.rates).map(([currency, amount]) => ({
    currency,
    country: currencyData[currency],
    amount,
  }));

  return {
    disclaimer: ratesData.disclaimer,
    license: ratesData.license,
    timestamp: ratesData.timestamp,
    base: ratesData.base,
    rates,
  };
};

export const useLatestData = () => {
  return useQuery<ExchangeRates, Error>({
    queryKey: ['latest'],
    queryFn: fetchData,
    refetchInterval: 30000
  });
};