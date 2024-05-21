import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import HistoricalExchangeRates from "@/components/shared/HistoricalExchangeRates"
import LiveCurrencyRates from "@/components/shared/LiveCurrencyRates"
import FilterForm from "@/components/shared/FilterForm"
import { FormSchema } from "@/interfaces/exchange-rate-interface"
import { z } from "zod"

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState<z.infer<typeof FormSchema>>();

  const handleOnSelectDate = (date?: z.infer<typeof FormSchema>) => {
    setSelectedDate(date)
  }

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Currency Table: USD — US Dollar</h2>
            <div className="flex items-center space-x-2">
              <FilterForm onSelectDate={handleOnSelectDate} />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Live Currency Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <LiveCurrencyRates />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Historical Exchange Rates</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <HistoricalExchangeRates selectedDate={selectedDate} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
