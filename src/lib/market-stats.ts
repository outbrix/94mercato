/**
 * Global Marketplace Statistics
 * Constant values used across the platform to provide high-authority social proof.
 * Update these as the platform grows.
 */
export const MARKET_STATS = {
    // Total number of creators/sellers on the platform
    TOTAL_CREATORS: 2150,
    
    // Total number of digital assets listed
    TOTAL_PRODUCTS: 5430,
    
    // Total revenue distributed to creators (in INR Lakhs)
    DISTRIBUTED_REVENUE_LAKHS: 28.4,
    
    // Number of countries served
    COUNTRIES_SERVED: 45,
    
    // Category-specific asset counts (realistic distribution)
    CATEGORIES: {
        UI_KITS: 1420,
        MODELS_3D: 910,
        SAAS_TEMPLATES: 480,
        ICON_SYSTEMS: 2350,
    },
    
    // North Star: Lowest possible fee (%)
    LOWEST_FEE: 2.0,
    
    // Growth indicators (simulated for UI pulse)
    WEEKLY_GROWTH_PERCENT: 14.8,
};

/**
 * Generates a deterministic rating based on a string (ID or Slug)
 * to ensure products have varied but consistent ratings across the site.
 */
export function getProductRating(seed: string): number {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Result between 4.5 and 5.0
    const rating = 4.5 + (Math.abs(hash % 51) / 100);
    return Number(rating.toFixed(1));
}

/**
 * Generates a realistic sales count based on a seed
 */
export function getSimulatedSales(seed: string): number {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash % 120) + 10;
}
