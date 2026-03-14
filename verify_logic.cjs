
// Simple JS verification script to check constants and logic
const TIER_COMMISSION = {
  starter: 6,
  creator_pro: 3,
  creator_partner: 2,
};

const FLASH_SALE_COMMISSION = {
  starter: 2.5,
  creator_pro: 0,
  creator_partner: 0,
};

function isFlashSaleDay(date) {
  return date.getDate() === 1;
}

function getCommissionRate(tier, date) {
  if (isFlashSaleDay(date)) {
    return FLASH_SALE_COMMISSION[tier];
  }
  return TIER_COMMISSION[tier];
}

console.log('--- 94mercato Fee Logic Audit ---');

const testTiers = ['starter', 'creator_pro', 'creator_partner'];

console.log('\n[TEST 1] Standard Day (e.g., March 14)');
const standardDate = new Date(2026, 2, 14); // March 14
testTiers.forEach(tier => {
    const rate = getCommissionRate(tier, standardDate);
    console.log(`- ${tier}: ${rate}%`);
});

console.log('\n[TEST 2] Flash Sale Day (e.g., April 1)');
const flashDate = new Date(2026, 3, 1); // April 1
testTiers.forEach(tier => {
    const rate = getCommissionRate(tier, flashDate);
    console.log(`- ${tier}: ${rate}%`);
});

console.log('\n--- End of Audit ---');
