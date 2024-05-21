import { Skeleton } from '@/components/ui/skeleton'

const HistoricalRatesPlaceholder = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-4 w-[200px] ml-auto" />
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-4 w-[200px] ml-auto" />
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-4 w-[200px] ml-auto" />
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-4 w-[200px] ml-auto" />
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <Skeleton className="h-4 w-[200px] ml-auto" />
      </div>
    </>
  )
}

export default HistoricalRatesPlaceholder