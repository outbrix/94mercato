
import { getCommissionRate, isFlashSaleDay, TIER_COMMISSION, FLASH_SALE_COMMISSION, SellerTier } from './src/lib/commission';

function runAudit() {
  console.log('--- Fee Audit Started ---');
  
  const tiers: SellerTier[] = ['starter', 'creator_pro', 'creator_partner'];
  
  console.log('\n1. Checking Standard Rates (Non-Flash Sale Simulation)');
  // We can't easily mock Date.now() in a simple script without libraries, but we can verify the data structure
  tiers.forEach(tier => {
    console.log(`${tier}: ${TIER_COMMISSION[tier]}% (Expected: ${tier === 'starter' ? 6 : tier === 'creator_pro' ? 3 : 2})`);
  });

  console.log('\n2. Checking Flash Sale Rates');
  tiers.forEach(tier => {
    console.log(`${tier}: ${FLASH_SALE_COMMISSION[tier]}% (Expected: ${tier === 'starter' ? 2.5 : 0})`);
  });

  console.log('\n3. Verifying logic branch in getCommissionRate');
  // Since we are running this on March 14, isFlashSaleDay() will be false.
  const currentRate = getCommissionRate('starter');
  if (new Date().getDate() === 1) {
    console.log(`Today is the 1st. Rate: ${currentRate}% (Should be 2.5)`);
  } else {
    console.log(`Today is not the 1st. Rate: ${currentRate}% (Should be 6)`);
  }

  console.log('\n--- Audit Complete ---');
}

runAudit();
