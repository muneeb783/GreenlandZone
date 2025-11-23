import { useState } from 'react';
import { ChevronRight, Award, Users, TrendingUp, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import '../styles/common-styles.css';
import '../styles/feedadditives.css';
import methionine from "../assets/methionine.jpeg";
import lysine from "../assets/lysine.jpeg";
import choline from "../assets/choline_chloride.jpeg";
import niacin from "../assets/niacin.jpeg";
import globalmpg from "../assets/globalmpg.jpeg";
import ztox from "../assets/ztox.jpeg";
import globafix from "../assets/globafix.jpeg";
import greenstart84 from "../assets/greenstar84.jpeg";
import greenstar99 from "../assets/greenstar99.jpeg";
import biotin from "../assets/biotin.jpeg";
import vc from "../assets/ascorbic_acid.jpeg";
import greensp from "../assets/green_sp.jpeg";
import greenpremix from "../assets/green_premix.jpeg";


const FeedAdditivesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Enhanced product data with comprehensive feed additive information
  const products = [
    {
      id: 1,
      name: "CYB-G Methionine 70%",
      category: "Amino Acids",
      shortDesc: "1st Limiting Amino Acid for optimal dairy nutrition and milk quality",
      fullDesc: "CYB-G Methionine 70% is a premium rumen-protected methionine supplement designed to meet the critical amino acid requirements of high-producing dairy cows. With superior bypass rate and intestinal release, this product ensures optimal availability of methionine for milk protein synthesis and overall metabolic health. The advanced coating technology protects the amino acid from rumen degradation while ensuring maximum absorption in the small intestine.",
      features: [
        "DL-Methionine content > 70% with superior purity",
        "Rumen Bypass Rate > 84% for maximum protection",
        "Intestinal Release Rate > 97% ensuring optimal absorption",
        "Improves milk quality, especially milk protein percentage",
        "Enhances reproductive efficiency and fertility",
        "Supports optimal metabolic function and health"
      ],
      image: methionine,
      tag: "Essential"
    },
    {
      id: 2,
      name: "CYB-G Lysine 70%",
      category: "Amino Acids",
      shortDesc: "2nd Limiting Amino Acid for enhanced milk production and protein synthesis",
      fullDesc: "CYB-G Lysine 70% delivers essential lysine nutrition with advanced rumen protection technology. As the second limiting amino acid in dairy rations, lysine plays a crucial role in milk production and protein synthesis. This premium product ensures optimal lysine availability to support high milk yields and superior milk protein content, maximizing the genetic potential of your dairy herd.",
      features: [
        "L-Lysine HCl content > 70% for maximum efficacy",
        "Rumen Bypass Rate > 86% with advanced coating",
        "Intestinal Release Rate > 93% for optimal absorption",
        "Enhances lysine availability to meet production requirements",
        "Significantly improves milk yield and output",
        "Increases milk protein rate and quality"
      ],
      image: lysine,
      tag: "Performance"
    },
    {
      id: 3,
      name: "CYB-G Choline 30%",
      category: "Vitamins",
      shortDesc: "Essential nutrient for metabolic health and liver function support",
      fullDesc: "CYB-G Choline 30% is a rumen-protected choline supplement specifically formulated to support metabolic health during the critical transition period. Choline plays a vital role in fat metabolism, liver health, and prevention of metabolic disorders. This advanced formulation ensures maximum bioavailability and effectiveness in reducing ketosis and maintaining optimal perinatal health in dairy cows.",
      features: [
        "Choline Chloride content > 30% in protected form",
        "Bypass Rate > 84% for rumen protection",
        "Intestinal Release Rate > 99% ensuring complete absorption",
        "Effectively reduces ketosis and maintains perinatal health",
        "Helps in significant reduction of NEFA and BHBA levels",
        "Reduces fatty liver syndrome and extends dairy cow lifespan"
      ],
      image: choline,
      tag: "Health"
    },
    {
      id: 4,
      name: "CYB-G Niacin 50%",
      category: "Vitamins",
      shortDesc: "B-vitamin for energy metabolism and ketosis prevention",
      fullDesc: "CYB-G Niacin 50% provides essential B-vitamin nutrition with superior rumen protection technology. Niacin (Vitamin B3) is critical for energy metabolism, helping to prevent ketosis and improve overall metabolic efficiency. This rumen-protected formulation ensures optimal delivery of niacin to the small intestine where it can be effectively absorbed and utilized for maximum benefit.",
      features: [
        "Niacinamide content: 50% in protected form",
        "Rumen Bypass Rate: 86% for maximum protection",
        "Intestinal Release Rate: 97% ensuring optimal absorption",
        "Effectively prevents ketone disease in dairy cows",
        "Significantly increases milk yield and production",
        "Improves reproductive performance and fertility"
      ],
      image: niacin,
      tag: "Metabolic"
    },
    {
      id: 5,
      name: "Global MPG",
      category: "Energy",
      shortDesc: "Powder form energy booster for transition period support",
      fullDesc: "Global MPG is a sophisticated powder-form energy supplement specifically designed for transition dairy cows. This synergistic blend of glucose precursors and liver protectors provides essential energy support during the critical periparturient period. The advanced formulation helps reduce energy deficit, prevent metabolic disorders, and support optimal transition into lactation.",
      features: [
        "Monopropyleneglycol: 31% for energy provision",
        "Glycerol: 10% as glucose precursor",
        "Calcium Propionate: 4% for additional energy",
        "Niacin: 0.6% for metabolic support",
        "Synergistic association of glucose precursors and liver protectors",
        "Significantly lowers energy deficit during transition period"
      ],
      image: globalmpg,
      tag: "Transition"
    },
    {
      id: 6,
      name: "Glycostar",
      category: "Energy",
      shortDesc: "Liquid form energy booster with comprehensive metabolic support",
      fullDesc: "Glycostar is a premium liquid energy supplement formulated to provide comprehensive metabolic support during stress periods. This advanced blend combines multiple energy sources with essential amino acids and vitamins to prevent ketosis, reduce stress, and maintain optimal metabolic function. The liquid form ensures rapid absorption and immediate availability of nutrients when cows need them most.",
      features: [
        "Monopropyleneglycol: 40% for rapid energy",
        "Glycerol content > 14% as energy source",
        "Contains Isomaltose for sustained energy release",
        "Includes Sodium propionates, Niacin, Methionine, and Lysine",
        "Effectively prevents ketosis and metabolic disorders",
        "Reduces heat stress and vaccination stress impacts"
      ],
      image: "/api/placeholder/600/400",
      tag: "Advanced"
    },
    {
      id: 7,
      name: "Z-Tox",
      category: "Toxin Binder",
      shortDesc: "Clay-based toxin binder with selective mycotoxin adsorption",
      fullDesc: "Z-Tox represents the third generation of clinoptilolite-based toxin binders, offering superior selective adsorption of mycotoxins while preserving essential nutrients. This advanced clay-based formulation effectively binds harmful mycotoxins, preventing their absorption and reducing their negative impact on animal health, reproduction, and productivity.",
      features: [
        "3rd Generation Clinoptilolite technology",
        "Selective adsorption for mycotoxins, preserving nutrients",
        "Significantly lowers cases of mastitis",
        "Improves reproductive performance and fertility",
        "Enhances overall cow health and well-being",
        "Does not bind essential vitamins and minerals"
      ],
      image: ztox,
      tag: "Protection"
    },
    {
      id: 8,
      name: "Globafix Plus",
      category: "Toxin Binder",
      shortDesc: "Yeast-based toxin binder with broad-spectrum mycotoxin binding",
      fullDesc: "Globafix Plus is a premium yeast cell wall-based toxin binder offering comprehensive protection against multiple mycotoxins. With high concentrations of Beta-Glucans and Mannan-oligosaccharides (MOS), this product provides dual action: mycotoxin binding and immune system support. The unique formulation helps reduce the negative effects of mycotoxins on health and productivity.",
      features: [
        "35% Yeast cell wall with superior binding capacity",
        "Contains 22.5% Beta-Glucans for immune support",
        "Includes 12.5% MOS for gut health",
        "Binds Aflatoxins, Zearalenone, Fumonisin, Ochratoxin",
        "Effective against T-2 and H-2 Toxins",
        "Helps reduce mastitis, lameness, and repeat breeding issues"
      ],
      image: globafix,
      tag: "Immunity"
    },
    {
      id: 9,
      name: "Greenstar 84%",
      category: "Bypass Fat",
      shortDesc: "Rumen bypass fat 84% for energy supplementation and milk production",
      fullDesc: "Greenstar 84% is a premium rumen bypass fat formulated from a natural blend of palm oil and calcium. Rich in palmitic acid (C16), this energy-dense supplement provides essential fatty acids while bypassing rumen fermentation. The optimal fatty acid profile supports increased milk yield, improved body condition score, and enhanced reproductive performance in high-producing dairy cows.",
      features: [
        "Palmitic acid (C16): 48% for optimal milk fat",
        "Lauric acid (C12): 3% for energy",
        "Myristic acid (C14): 12% for health benefits",
        "Calcium content: 9% for mineral support",
        "Natural mixture of palm oil and calcium salts",
        "Improves milk yield, Body Condition Score, and reproduction"
      ],
      image: greenstart84,
      tag: "Energy"
    },
    {
      id: 10,
      name: "Greenstar 99%",
      category: "Bypass Fat",
      shortDesc: "Premium rumen bypass fat 99% for maximum milk fat percentage",
      fullDesc: "Greenstar 99% represents the pinnacle of bypass fat technology, offering ultra-high purity and concentration. Available in two specialized formulations (85% and 90% palmitic acid), this premium product is designed for high-producing dairy cows requiring maximum energy supplementation and milk fat enhancement. The superior purity ensures optimal bioavailability and effectiveness.",
      features: [
        "Available in 85% Palmitic acid formulation",
        "Also available in 90% Palmitic acid variant",
        "Specifically formulated to improve milk fat percentage",
        "Premium quality bypass fat for high-producing cows",
        "Ultra-high purity for maximum effectiveness",
        "Ideal for enhancing milk quality and composition"
      ],
      image: greenstar99,
      tag: "Premium"
    },
    {
      id: 11,
      name: "Biotin 2%",
      category: "Vitamins",
      shortDesc: "Essential vitamin for hoof health and integrity",
      fullDesc: "Biotin 2% is a high-potency vitamin supplement specifically formulated to support hoof health and integrity in dairy cattle. Biotin plays a crucial role in keratin synthesis, directly impacting horn quality and hoof structure. Regular supplementation significantly reduces lameness incidence, improves mobility, and enhances overall productivity by maintaining optimal hoof health.",
      features: [
        "Biotin composition: 20mg per gram (2%)",
        "Premium white crystalline powder form",
        "Crucial role in hoof health and horn quality",
        "Maintains hoof integrity and structure",
        "Significantly reduces lameness incidence",
        "Increases productivity through better mobility"
      ],
      image: biotin,
      tag: "Mobility"
    },
    {
      id: 12,
      name: "Vitamin C",
      category: "Vitamins",
      shortDesc: "Powerful antioxidant and stress reducer for dairy cattle",
      fullDesc: "Premium Vitamin C (L-Ascorbic acid) provides essential antioxidant support for dairy cattle facing various stress conditions. This high-purity supplement protects cells from oxidative damage, supports immune function, and assists liver detoxification processes. Particularly beneficial during heat stress, transition periods, and when dealing with environmental toxins or mycotoxins.",
      features: [
        "99% Pure L-Ascorbic acid in crystalline powder form",
        "Reduces heat stress and protects from oxidative damage",
        "Assists liver cells in detoxifying mycotoxins and heavy metals",
        "Supports immune system function and health",
        "Recommended dosage: 10g per cow per day",
        "For calves: 1g per calf per day"
      ],
      image: vc,
      tag: "Antioxidant"
    },
    {
      id: 13,
      name: "Green Super Plus",
      category: "Premix",
      shortDesc: "Premium mineral-vitamin premix for high-producing dairy cows",
      fullDesc: "Green Super Plus is a comprehensive mineral-vitamin premix specifically formulated for high-producing dairy cows yielding 25-35 liters per day. This premium blend combines both organic and inorganic minerals with essential vitamins to support optimal production, health, and reproductive performance. The balanced formulation ensures all nutritional requirements are met for maximum productivity.",
      features: [
        "Contains balanced organic and inorganic minerals",
        "Stimulates optimal growth rate and weight gain",
        "Significantly improves milk production and quality",
        "Enhances reproductive performance and fertility",
        "Specifically formulated for 25-35 liter producers",
        "Complete nutritional support for high-yielding cows"
      ],
      image: greensp,
      tag: "Complete"
    },
    {
      id: 14,
      name: "Green Premix",
      category: "Premix",
      shortDesc: "Complete mineral-vitamin premix for standard production levels",
      fullDesc: "Green Premix is a comprehensive mineral-vitamin supplement designed for dairy cows producing 20-25 liters per day, as well as heifers and dry cows. This complete formulation includes all essential macro and micro minerals, along with critical vitamins, to support optimal health, growth, and production. The balanced blend ensures nutritional adequacy across all production stages.",
      features: [
        "Contains Ca, Mg, Na, Cl, and Soda bicarbonate",
        "Includes trace minerals: Co, Cu, I, Fe, Mn, Se, Zn",
        "Fortified with Vitamins A, D, E, Niacin, and Biotin",
        "Ideal for animals with 20-25 liter milk production",
        "Suitable for heifers and dry cows",
        "Complete nutritional support for all production stages"
      ],
      image: greenpremix,
      tag: "Standard"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Targeted Nutrition",
      description: "Specific formulations designed for different production stages and nutritional requirements"
    },
    {
      icon: Users,
      title: "Health Protection",
      description: "Prevent metabolic disorders and improve overall animal health and well-being"
    },
    {
      icon: TrendingUp,
      title: "High Bioavailability",
      description: "Rumen bypass technology ensures maximum nutrient absorption and utilization"
    },
    {
      icon: Sparkles,
      title: "Proven Results",
      description: "Research-backed formulations with demonstrated performance improvements and ROI"
    }
  ];

  const stats = [
    { value: "30%", label: "Higher Milk Yield" },
    { value: "95%", label: "Better Health" },
    { value: "40%", label: "ROI Increase" }
  ];

  return (
    <div className="feedadd-container">
      <SEO
        title="Feed Additives - Premium Nutritional Supplements"
        description="High-quality feed additives including DL-Methionine, L-Lysine, Choline Chloride, Niacin, Global MPG, and Z-Tox. Enhance herd health and productivity with our nutritional supplements."
        keywords="feed additives, methionine, lysine, choline chloride, niacin, dairy nutrition, cattle feed supplements, animal nutrition"
        url="https://greenlandzone.com/products/feed"
      />
      {/* Hero Section */}
      <header className="feedadd-hero-section" data-navbar-theme="dark">
        <div className="feedadd-hero-overlay"></div>
        <div className="feedadd-hero-content">
          <div className="feedadd-hero-badge">PREMIUM FEED ADDITIVES</div>
          <h1 className="feedadd-hero-title">
            Feed Additive
            <span className="feedadd-hero-accent">Solutions</span>
          </h1>
          <p className="feedadd-hero-description">
            Advanced nutrition supplements for optimal animal health, productivity and profitability
          </p>

          {/* Stats Grid */}
          <div className="feedadd-hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="feedadd-stat-item">
                <div className="feedadd-stat-number">{stat.value}</div>
                <div className="feedadd-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="feedadd-features-section" data-navbar-theme="light">
        <div className="feedadd-features-container">
          <h2 className="feedadd-features-title">Why Choose Our Feed Additives?</h2>
          <div className="feedadd-features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feedadd-feature-card">
                  <div className="feedadd-feature-icon-wrapper">
                    <IconComponent className="feedadd-feature-icon-svg" size={48} strokeWidth={1.5} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid - Modern Card Design */}
      <section className="feedadd-products-section" data-navbar-theme="light">
        <div className="feedadd-products-container">
          <h2 className="feedadd-section-title">Our Product Range</h2>
          <p className="feedadd-section-subtitle">
            Comprehensive feed additive solutions for every nutritional requirement and production stage
          </p>

          <div className="feedadd-products-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="feedadd-product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="feedadd-product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="feedadd-product-image"
                  />
                  <div className="feedadd-product-category">{product.tag}</div>
                  <div className="feedadd-product-overlay">
                    <button className="feedadd-view-details-btn">
                      View Details
                      <ChevronRight className="btn-icon" size={16} />
                    </button>
                  </div>
                </div>
                <div className="feedadd-product-content">
                  <div className="feedadd-product-category-text">{product.category}</div>
                  <h3 className="feedadd-product-title">{product.name}</h3>
                  <p className="feedadd-product-description">{product.shortDesc}</p>
                  <ul className="feedadd-product-features">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="feedadd-feature-item">
                        <ChevronRight className="feedadd-feature-bullet-icon" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal - Enhanced Design */}
      {selectedProduct && (
        <div className="feedadd-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="feedadd-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="feedadd-modal-grid">
              <div className="feedadd-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="feedadd-modal-info">
                <div className="feedadd-modal-header">
                  <div className="feedadd-modal-category">{selectedProduct.category}</div>
                  <span className="feedadd-modal-tag">{selectedProduct.tag}</span>
                </div>
                <h2 className="feedadd-modal-title">{selectedProduct.name}</h2>
                <p className="feedadd-modal-description">{selectedProduct.fullDesc}</p>

                <div className="feedadd-modal-features-section">
                  <h3 className="feedadd-modal-features-title">Key Features</h3>
                  <ul className="feedadd-modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>
                        <ChevronRight className="feedadd-feature-icon" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="feedadd-close-bar" onClick={() => setSelectedProduct(null)}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedAdditivesPage;
