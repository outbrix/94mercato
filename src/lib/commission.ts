/**
 * Commission calculation logic for 94mercato
 * 
 * Fees Structure:
 * - Partner (Invite Only): 2%
 * - Public (Starter): 6%
 * - Subscriber (Creator Pro): 3%
 * 
 * Flash Sale System (1st of every month):
 * - Partner & Pro: 0% Platform Commission
 * - Starter: 2.5% Platform Commission
 */

export type SellerTier = 'starter' | 'creator_pro' | 'creator_partner';

export const TIER_COMMISSION: Record<SellerTier, number> = {
  starter: 6,
  creator_pro: 3,
  creator_partner: 2,
};

export const FLASH_SALE_COMMISSION: Record<SellerTier, number> = {
  starter: 2.5,
  creator_pro: 0,
  creator_partner: 0,
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
    return FLASH_SALE_COMMISSION[tier];
  }
  return TIER_COMMISSION[tier];
}

/**
 * Calculates the commission amount for a given price and tier
 */
export function calculateCommission(price: number, tier: SellerTier): number {
  const rate = getCommissionRate(tier);
  return (price * rate) / 100;
}
