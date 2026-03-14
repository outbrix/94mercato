import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";

import { RecentlyViewed } from "@/components/home/RecentlyViewed";
import { Categories } from "@/components/home/Categories";
import { SellerCTA } from "@/components/home/SellerCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { FeaturedCreators } from "@/components/home/FeaturedCreators";
import { Helmet } from "react-helmet-async";
import { FlashSaleBanner } from "@/components/ui/FlashSaleBanner";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>94mercato — Sell What You Know | Digital Marketplace for Creators</title>
        <meta
          name="description"
          content="94mercato is where creators sell templates, courses, fonts, and digital products directly to their audience — with as low as 2% fees."
        />
        <meta property="og:title" content="94mercato — Sell What You Know" />
        <meta
          property="og:description"
          content="The creator-first digital marketplace with the lowest fees."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://94mercato.com" />
      </Helmet>
      <Layout>
        <FlashSaleBanner className="mt-16" />
        <Hero />
        <Categories />
        <TrendingProducts />

        <FeaturedCreators />
        <SellerCTA />
        <Testimonials />
        <RecentlyViewed />
        <Newsletter />
      </Layout>
    </>
  );
};

export default Index;
