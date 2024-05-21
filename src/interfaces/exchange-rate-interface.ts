
import { z } from "zod"

export const FormSchema = z.object({
  selectedDate: z.date({
    required_error: "A date of birth is required.",
  })
})

export interface Rate {
  currency: string;
  country: string;
  amount: number;
}

export interface ExchangeRates {
  base: string,
  disclaimer: string,
  license: string,
  rates: Rate[],
  timestamp: number
}