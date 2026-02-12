# Mercato94 Monetization Plan

> **Company:** Mercato94  
> **Parent Company:** US LLC  
> **Website:**  Global Digital Marketplace  
> **Type:** Digital Product Marketplace  
> **Scope:** Global  
> **Created:** January 2026

---

## 💰 Revenue Streams

### 1. Commission Model (Primary Revenue)

Take a percentage cut from every sale on the platform.

| Model | Rate | Example |
|-------|------|---------|
| **Standard** | 10-15% per sale | Seller sells ₹1000 product → You get ₹100-150 |
| **Tiered** | Lower % for high sellers | 15% base, 10% for >₹50K/month sales |
| **Selected Sellers** | Custom rate (see below) | Special negotiated commission for approved sellers |

> **Recommendation:** Start at 10-12% to attract early sellers (Gumroad charges 10%, Creative Market charges 40%)

---

### 1.1 Selected Seller Commission Program

A **special commission tier** for handpicked/approved sellers who qualify for reduced rates.

| Criteria | Selected Rate | Standard Rate |
|----------|---------------|---------------|
| **High-Volume Sellers** | 5-7% | 10-15% |
| **Strategic Partners** | 3-5% | 10-15% |
| **Early Adopters/Influencers** | Custom | 10-15% |

**How It Works:**
1. Admin manually approves sellers for the "Selected Seller" tier
2. Selected sellers are flagged in the database with a custom commission rate
3. At checkout, the system checks if seller is "selected" and applies their special commission
4. Regular sellers continue to pay standard commission rates

**Benefits of Selected Seller Program:**
- Attract premium/high-quality sellers to the platform
- Build strategic partnerships with influencers and established creators
- Create loyalty among high-performing sellers
- Flexible negotiation for enterprise/bulk deals

> **Note:** Selected Seller status is invitation-only and managed through the admin dashboard.

---

### 2. Featured Listings / Hot Deals Placement

Sellers **pay to be featured** in the Hot Deals section.

| Package | Price (Example) | Duration |
|---------|-----------------|----------|
| **Homepage Feature** | £25-50/week | 7 days on homepage |
| **Hot Deal Spotlight** | £15-30/day | 24hr top placement |
| **Category Banner** | £40-80/week | Banner in category page |

**Implementation:** Add a "Boost Your Product" button in seller dashboard → Payment via Stripe → Auto-feature for X days

---

### 3. Seller Subscription Plans

| Plan | Price | Benefits |
|------|-------|----------|
| **Free** | £0/month | 15% commission, basic stats |
| **Pro** | £9.99/month | 8% commission, advanced analytics, promo codes |
| **Business** | £29.99/month | 5% commission, priority support, unlimited products |

> This creates **recurring revenue** even when sales are slow!

---

### 4. Promoted Promo Codes

Monetize the existing promo code system:

- **"Sitewide Promo"** - Sellers pay £20-50 to have their code shown sitewide
- **Newsletter Feature** - £15 to include their promo in your email blast
- **Social Media Promotion** - £10-25 to post their deal on your Instagram/Twitter

---

### 5. Launch Partnerships

- **Approach existing digital creators** (course creators, designers, developers)
- Offer: "List your products on Mercato94 - **0% commission for first 3 months**"
- In exchange: They promote your platform to their audience
- After 3 months → Regular commission kicks in

---

### 6. Affiliate Program

- Give influencers/bloggers a unique referral link
- They get 20-30% of your commission for 1 year on referred sellers
- **Cost you nothing** upfront, grows your platform virally

---

## 🚀 Quick Action Plan

| Week | Action | Expected Outcome |
|------|--------|------------------|
| **Week 1** | Add Stripe payment for "Featured Listing" | Immediate revenue stream |
| **Week 2** | Launch Seller Pro Plan (£9.99/mo) | Recurring revenue |
| **Week 3** | Email 50 digital product creators, offer 0% commission for 3 months | Get first 10-20 sellers |
| **Week 4** | Run your first "Mercato94 Launch Sale" - promote seller products | Build marketplace activity |

---

## 📊 Global & Legal Considerations

### Company Structure
- **Parent Company:** US LLC (for global operations & liability protection)
- **Operating Website:** UK-based digital platform
- **Market Scope:** Global (targeting UK, India, US, and international markets)

### UK Operations
1. **VAT Registration** - If you expect >£85K revenue/year, register for UK VAT
2. **Payment Processors** - Use **Stripe** (UK-friendly, handles global seller payouts)
3. **Legal** - Have Terms of Service stating your commission structure

### US LLC Considerations
1. **State Registration** - Ensure LLC is registered in a favorable state (Delaware/Wyoming common)
2. **Tax Obligations** - File US tax returns; consult with international tax advisor
3. **Contracts** - Seller agreements should reference the US LLC as the contracting entity

### Multi-Currency Support
- **GBP (£)** - Primary UK customers
- **USD ($)** - US/international customers
- **INR (₹)** - Indian market
- **EUR (€)** - European customers

---

## 🏷️ Existing Features Summary

### Hot Deals Section
- ✅ Frontend UI complete
- ⏳ Backend API `/products/deals` needs connection
- Daily countdown timer creates urgency
- Shows discounted products with promo codes

### Promotional Code System
- ✅ Database schema ready (Supabase)
- ✅ Seller management page at `/seller/promo-codes`
- ⏳ Checkout integration pending
- Supports percentage & fixed discounts, usage limits, expiration dates

---

## 📝 Next Steps to Implement

- [ ] Add Stripe integration for seller subscriptions
- [ ] Create "Boost Product" payment flow
- [ ] Build Featured Listing admin panel
- [ ] Connect Hot Deals to backend API
- [ ] Implement promo code validation at checkout
- [ ] Set up affiliate tracking system

---

*Last Updated: January 25, 2026*
