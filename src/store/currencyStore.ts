import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CurrencyCode = 
  'USD' | 'EUR' | 'GBP' | 'INR' | 'AED' | 'CNY' | 'UGX' | 
  'PKR' | 'BDT' | 'NPR' | 'SAR' | 'RUB' | 'CAD' | 'AUD' | 
  'JPY' | 'SGD' | 'MYR' | 'IDR' | 'THB' | 'VND' | 'ZAR' | 'NGN' | 'KES' | 
  'CHF' | 'SEK' | 'NOK' | 'DKK' | 'TRY' | 'PLN' | 'CZK' | 'QAR' | 'KWD' | 
  'OMR' | 'BHD' | 'ILS' | 'BRL' | 'MXN' | 'CLP' | 'COP' | 'PHP' | 'KRW' | 
  'TWD' | 'NZD' | 'EGP' | 'MAD' | 'LKR' | 'JOD' | 'GHS';

interface CurrencyState {
  baseCurrency: 'USD';
  currentCurrency: CurrencyCode;
  exchangeRates: Record<CurrencyCode, number>;
  lastFetched: number | null;
  setCurrency: (code: CurrencyCode) => void;
  fetchRates: () => Promise<void>;
  convert: (amount: number, from: CurrencyCode, to: CurrencyCode) => number;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set, get) => ({
      baseCurrency: 'USD',
      currentCurrency: 'USD',
      exchangeRates: {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        INR: 83.20,
        AED: 3.67,
        CNY: 7.20,
        UGX: 3750,
        PKR: 278,
        BDT: 110,
        NPR: 133,
        SAR: 3.75,
        RUB: 92,
        CAD: 1.35,
        AUD: 1.52,
        JPY: 151,
        SGD: 1.34,
        MYR: 4.73,
        IDR: 15800,
        THB: 36.5,
        VND: 24800,
        ZAR: 19.10,
        NGN: 1300,
        KES: 132,
        CHF: 0.90,
        SEK: 10.60,
        NOK: 10.70,
        DKK: 6.90,
        TRY: 32.50,
        PLN: 4.00,
        CZK: 23.50,
        QAR: 3.64,
        KWD: 0.31,
        OMR: 0.38,
        BHD: 0.38,
        ILS: 3.75,
        BRL: 5.10,
        MXN: 16.80,
        CLP: 950,
        COP: 3900,
        PHP: 57,
        KRW: 1350,
        TWD: 32,
        NZD: 1.68,
        EGP: 48,
        MAD: 10.10,
        LKR: 300,
        JOD: 0.71,
        GHS: 14.50,
      },
      lastFetched: null,
      
      setCurrency: (code) => set({ currentCurrency: code }),
      
      fetchRates: async () => {
        const { lastFetched } = get();
        const TWELVE_HOURS = 12 * 60 * 60 * 1000;
        
        // Only fetch if rates are older than 12 hours
        if (lastFetched && Date.now() - lastFetched < TWELVE_HOURS) return;
        
        try {
          const response = await fetch('https://open.er-api.com/v6/latest/USD');
          const data = await response.json();
          
          if (data && data.rates) {
            set({
              exchangeRates: {
                USD: 1,
                EUR: data.rates.EUR || 0.92,
                GBP: data.rates.GBP || 0.79,
                INR: data.rates.INR || 83.20,
                AED: data.rates.AED || 3.67,
                CNY: data.rates.CNY || 7.20,
                UGX: data.rates.UGX || 3750,
                PKR: data.rates.PKR || 278,
                BDT: data.rates.BDT || 110,
                NPR: data.rates.NPR || 133,
                SAR: data.rates.SAR || 3.75,
                RUB: data.rates.RUB || 92,
                CAD: data.rates.CAD || 1.35,
                AUD: data.rates.AUD || 1.52,
                JPY: data.rates.JPY || 151,
                SGD: data.rates.SGD || 1.34,
                MYR: data.rates.MYR || 4.73,
                IDR: data.rates.IDR || 15800,
                THB: data.rates.THB || 36.5,
                VND: data.rates.VND || 24800,
                ZAR: data.rates.ZAR || 19.10,
                NGN: data.rates.NGN || 1300,
                KES: data.rates.KES || 132,
                CHF: data.rates.CHF || 0.90,
                SEK: data.rates.SEK || 10.60,
                NOK: data.rates.NOK || 10.70,
                DKK: data.rates.DKK || 6.90,
                TRY: data.rates.TRY || 32.50,
                PLN: data.rates.PLN || 4.00,
                CZK: data.rates.CZK || 23.50,
                QAR: data.rates.QAR || 3.64,
                KWD: data.rates.KWD || 0.31,
                OMR: data.rates.OMR || 0.38,
                BHD: data.rates.BHD || 0.38,
                ILS: data.rates.ILS || 3.75,
                BRL: data.rates.BRL || 5.10,
                MXN: data.rates.MXN || 16.80,
                CLP: data.rates.CLP || 950,
                COP: data.rates.COP || 3900,
                PHP: data.rates.PHP || 57,
                KRW: data.rates.KRW || 1350,
                TWD: data.rates.TWD || 32,
                NZD: data.rates.NZD || 1.68,
                EGP: data.rates.EGP || 48,
                MAD: data.rates.MAD || 10.10,
                LKR: data.rates.LKR || 300,
                JOD: data.rates.JOD || 0.71,
                GHS: data.rates.GHS || 14.50,
              },
              lastFetched: Date.now(),
            });
          }
        } catch (error) {
          console.error('Failed to fetch exchange rates:', error);
        }
      },
      
      convert: (amount, from, to) => {
        const { exchangeRates } = get();
        const fromRate = exchangeRates[from] || 1;
        const toRate = exchangeRates[to] || exchangeRates['USD'] || 1;
        
        const amountInUSD = amount / fromRate;
        return amountInUSD * toRate;
      },
    }),
    {
      name: 'currency-storage',
    }
  )
);
