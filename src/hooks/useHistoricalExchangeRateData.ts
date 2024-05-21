
import axiosInstance from '@/lib/axios-utils';
import { useQuery } from '@tanstack/react-query';
import { ExchangeRates, FormSchema } from '@/interfaces/exchange-rate-interface';
import { z } from "zod"
import { format } from "date-fns"

const fetchData = async (date?: z.infer<typeof FormSchema>): Promise<ExchangeRates> => {

  const selectedDate = date?.selectedDate ?? new Date()

  const historicalDate = format(selectedDate, "yyyy-MM-dd")
  
  console.log('HISTORICAL: ', historicalDate)

  const ratesResponse = await axiosInstance.get(`/historical/${historicalDate}.json?symbols=PHP,JPY,INR,KRW,SGD,MYR`);
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

export const useHistoricalExchangeRateData = (selectedDate?: z.infer<typeof FormSchema>) => {
  return useQuery<ExchangeRates, Error>({
    queryKey: ['historical', selectedDate],
    queryFn: () => fetchData(selectedDate)
  });
};