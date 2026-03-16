import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Currency configuration with symbols and locales
export const CURRENCY_CONFIG: Record<string, { symbol: string; locale: string; flag: string; label: string }> = {
  USD: { symbol: "$", locale: "en-US", flag: "🇺🇸", label: "USD" },
  EUR: { symbol: "€", locale: "en-US", flag: "🇪🇺", label: "EUR" },
  GBP: { symbol: "£", locale: "en-US", flag: "🇬🇧", label: "GBP" },
  INR: { symbol: "₹", locale: "en-US", flag: "🇮🇳", label: "INR" },
  AED: { symbol: "AED", locale: "en-US", flag: "🇦🇪", label: "AED" },
  CNY: { symbol: "¥", locale: "en-US", flag: "🇨🇳", label: "CNY" },
  UGX: { symbol: "USh", locale: "en-US", flag: "🇺🇬", label: "UGX" },
  PKR: { symbol: "Rs", locale: "en-US", flag: "🇵🇰", label: "PKR" },
  BDT: { symbol: "৳", locale: "en-US", flag: "🇧🇩", label: "BDT" },
  NPR: { symbol: "Rs", locale: "en-US", flag: "🇳🇵", label: "NPR" },
  SAR: { symbol: "SR", locale: "en-US", flag: "🇸🇦", label: "SAR" },
  RUB: { symbol: "₽", locale: "en-US", flag: "🇷🇺", label: "RUB" },
  CAD: { symbol: "$", locale: "en-US", flag: "🇨🇦", label: "CAD" },
  AUD: { symbol: "$", locale: "en-US", flag: "🇦🇺", label: "AUD" },
  JPY: { symbol: "¥", locale: "en-US", flag: "🇯🇵", label: "JPY" },
  SGD: { symbol: "$", locale: "en-US", flag: "🇸🇬", label: "SGD" },
  MYR: { symbol: "RM", locale: "en-US", flag: "🇲🇾", label: "MYR" },
  IDR: { symbol: "Rp", locale: "en-US", flag: "🇮🇩", label: "IDR" },
  THB: { symbol: "฿", locale: "en-US", flag: "🇹🇭", label: "THB" },
  VND: { symbol: "₫", locale: "en-US", flag: "🇻🇳", label: "VND" },
  ZAR: { symbol: "R", locale: "en-US", flag: "🇿🇦", label: "ZAR" },
  NGN: { symbol: "₦", locale: "en-US", flag: "🇳🇬", label: "NGN" },
  KES: { symbol: "KSh", locale: "en-US", flag: "🇰🇪", label: "KES" },
  LKR: { symbol: "Rs", locale: "en-US", flag: "🇱🇰", label: "LKR" },
  CHF: { symbol: "CHF", locale: "en-US", flag: "🇨🇭", label: "CHF" },
  SEK: { symbol: "kr", locale: "en-US", flag: "🇸🇪", label: "SEK" },
  NOK: { symbol: "kr", locale: "en-US", flag: "🇳🇴", label: "NOK" },
  DKK: { symbol: "kr", locale: "en-US", flag: "🇩🇰", label: "DKK" },
  TRY: { symbol: "₺", locale: "en-US", flag: "🇹🇷", label: "TRY" },
  PLN: { symbol: "zł", locale: "en-US", flag: "🇵🇱", label: "PLN" },
  CZK: { symbol: "Kč", locale: "en-US", flag: "🇨🇿", label: "CZK" },
  QAR: { symbol: "QR", locale: "en-US", flag: "🇶🇦", label: "QAR" },
  KWD: { symbol: "KD", locale: "en-US", flag: "🇰🇼", label: "KWD" },
  OMR: { symbol: "RO", locale: "en-US", flag: "🇴🇲", label: "OMR" },
  BHD: { symbol: "BD", locale: "en-US", flag: "🇧🇭", label: "BHD" },
  ILS: { symbol: "₪", locale: "en-US", flag: "🇮🇱", label: "ILS" },
  BRL: { symbol: "R$", locale: "en-US", flag: "🇧🇷", label: "BRL" },
  MXN: { symbol: "$", locale: "en-US", flag: "🇲🇽", label: "MXN" },
  CLP: { symbol: "$", locale: "en-US", flag: "🇨🇱", label: "CLP" },
  COP: { symbol: "$", locale: "en-US", flag: "🇨🇴", label: "COP" },
  PHP: { symbol: "₱", locale: "en-US", flag: "🇵🇭", label: "PHP" },
  KRW: { symbol: "₩", locale: "en-US", flag: "🇰🇷", label: "KRW" },
  TWD: { symbol: "NT$", locale: "en-US", flag: "🇹🇼", label: "TWD" },
  NZD: { symbol: "$", locale: "en-US", flag: "🇳🇿", label: "NZD" },
  EGP: { symbol: "E£", locale: "en-US", flag: "🇪🇬", label: "EGP" },
  MAD: { symbol: "DH", locale: "en-US", flag: "🇲🇦", label: "MAD" },
  JOD: { symbol: "JD", locale: "en-US", flag: "🇯🇴", label: "JOD" },
  GHS: { symbol: "GH₵", locale: "en-US", flag: "🇬🇭", label: "GHS" },
};

/**
 * Formats a price in cents to a localized currency string
 * @param cents - Price in cents (e.g., 2999 for $29.99)
 * @param currency - Currency code (USD, EUR, GBP, INR, AED, CNY)
 * @returns Formatted price string with currency symbol
 */
export function formatPrice(cents: number, currency: string = "USD"): string {
  const config = CURRENCY_CONFIG[currency] || CURRENCY_CONFIG.USD;

  try {
    // For AED, we force the label to be 'AED' instead of the Arabic symbol
    if (currency === 'AED') {
       return `AED ${(cents / 100).toLocaleString('en-AE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
    }

    return new Intl.NumberFormat(config.locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(cents / 100);
  } catch {
    // Fallback for unsupported currencies
    return `${config.symbol}${(cents / 100).toFixed(2)}`;
  }
}

/**
 * Get currency symbol for a given currency code
 */
export function getCurrencySymbol(currency: string = "USD"): string {
  return CURRENCY_CONFIG[currency]?.symbol || "$";
}
