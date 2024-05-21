import { useLatestData } from "@/hooks/useLatestData"
import HistoricalRatesPlaceholder from "@/components/shared/HistoricalRatesPlaceholder";

const LiveCurrencyRates = () => {

  const { data, error, isLoading } = useLatestData();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-8">
      {isLoading ? (
        <HistoricalRatesPlaceholder />
      ) : (
        data?.rates.slice(0, 5).map((rate) => (
          <div className="flex items-center" key={rate.currency}>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{rate.currency}</p>
              <p className="text-sm text-muted-foreground">{rate.country}</p>
            </div>
            <div className="ml-auto font-medium">{rate.amount}</div>
          </div>
        ))
      )}
    </div>
  )
}

export default LiveCurrencyRates