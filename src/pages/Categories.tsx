import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
    LayoutTemplate,
    Palette,
    GraduationCap,
    Smartphone,
    Type,
    Shapes,
    Code,
    Image
} from "lucide-react";

const categories = [
    {
        name: "Templates",
        description: "Website templates, landing pages, and complete design systems",
        icon: LayoutTemplate,
        href: "/products?category=Templates",
        color: "from-blue-500/20 to-blue-600/10",
    },
    {
        name: "UI Kits",
        description: "Component libraries, design systems, and interface elements",
        icon: Palette,
        href: "/products?category=UI Kits",
        color: "from-purple-500/20 to-purple-600/10",
    },
    {
        name: "Courses",
        description: "Learn from experts with in-depth tutorials and masterclasses",
        icon: GraduationCap,
        href: "/products?category=Courses",
        color: "from-green-500/20 to-green-600/10",
    },
    {
        name: "Mockups",
        description: "Photorealistic device and packaging mockups for presentations",
        icon: Smartphone,
        href: "/products?category=Mockups",
        color: "from-orange-500/20 to-orange-600/10",
    },
    {
        name: "Fonts",
        description: "Premium typefaces for branding, web, and print projects",
        icon: Type,
        href: "/products?category=Fonts",
        color: "from-pink-500/20 to-pink-600/10",
    },
    {
        name: "Icons",
        description: "Icon sets and illustrations for apps, websites, and presentations",
        icon: Shapes,
        href: "/products?category=Icons",
        color: "from-cyan-500/20 to-cyan-600/10",
    },
    {
        name: "Graphics",
        description: "Illustrations, backgrounds, textures, and visual assets",
        icon: Image,
        href: "/products?category=Graphics",
        color: "from-amber-500/20 to-amber-600/10",
    },
    {
        name: "Code",
        description: "Scripts, plugins, and development tools for creators",
        icon: Code,
        href: "/products?category=Code",
        color: "from-emerald-500/20 to-emerald-600/10",
    },
];

const Categories = () => {
    return (
        <>
            <Helmet>
                <title>Browse Categories — 94mercato</title>
                <meta
                    name="description"
                    content="Explore all categories on 94mercato. Find templates, UI kits, courses, mockups, fonts, icons, and more from top creators."
                />
            </Helmet>
            <Layout>
                {/* Hero */}
                <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/10 rounded-full mb-6 animate-fade-up">
                                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                                    Explore
                                </span>
                            </span>
                            <h1 className="heading-display text-4xl md:text-5xl mb-4 animate-fade-up delay-100">
                                Browse by Category
                            </h1>
                            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                                Find exactly what you're looking for in our curated collection of premium digital products.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {categories.map((category, index) => (
                                <Link
                                    key={category.name}
                                    to={category.href}
                                    className={`group glass-card-elevated p-6 hover:border-champagne/30 transition-all duration-300 animate-fade-up`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        <category.icon className="h-7 w-7 text-champagne" />
                                    </div>
                                    <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-champagne transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {category.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                            Can't find what you're looking for?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Browse our full collection or use our AI-powered search to find the perfect product.
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center px-8 py-3 bg-champagne text-midnight font-medium rounded-full hover:bg-champagne/90 transition-colors"
                        >
                            View All Products
                        </Link>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Categories;
