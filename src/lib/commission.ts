/**
 * Commission calculation logic for 94mercato
 * 
 * Fees Structure:
 * - Starter: 6%
 * - Creator (Creator Pro): 3%
 * - Partner (Invite Only): 2%
 * - Admin: 0%
 * 
 * Flash Sale System (1st of every month):
 * - Partner, Creator & Admin: 0% Platform Commission
 * - Starter: 2.5% Platform Commission
 */

import type { SellerTier } from "@/components/seller/TierBadge";

export const TIER_COMMISSION: Record<SellerTier, number> = {
  Starter: 6,
  Creator: 3,
  Partner: 2,
  Admin: 2,
};

export const FLASH_SALE_COMMISSION: Record<SellerTier, number> = {
  Starter: 2.5,
  Creator: 0,
  Partner: 0,
  Admin: 0,
};

/**
 * Checks if today is the 1st of the month (Flash Sale day)
 */
export function isFlashSaleDay(): boolean {
  const today = new Date();
  return today.getDate() === 1;
}

/**
 * Calculates the platform commission percentage for a given tier
 */
export function getCommissionRate(tier: SellerTier): number {
  if (isFlashSaleDay()) {
    return FLASH_SALE_COMMISSION[tier] ?? FLASH_SALE_COMMISSION.Starter;
  }
  return TIER_COMMISSION[tier] ?? TIER_COMMISSION.Starter;
}

/**
 * Calculates the commission amount for a given price and tier
 */
export function calculateCommission(price: number, tier: SellerTier): number {
  const rate = getCommissionRate(tier);
  return (price * rate) / 100;
}
