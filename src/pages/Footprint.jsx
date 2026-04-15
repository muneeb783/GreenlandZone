import { MapPin, Wrench, Leaf, Droplet, Sparkles } from 'lucide-react';
import { SEO, siteUrl } from '../components/SEO';
import '../styles/footprint.css';
import map1 from '../assets/mech-map.jpeg';

const Footprint = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Mechanization",
      shortTitle: "Mech",
      icon: Wrench,
      color: "#16a34a",
      description: "Complete dairy farming equipment, milking systems, and machinery solutions",
      locations: [
        "Faisalabad", "Lahore", "Multan", "Sahiwal", "Okara",
        "Pakpattan", "Vehari", "Bahawalpur", "Kasur", "Sheikhupura",
        "Gujranwala", "Sialkot", "Gujrat", "Sargodha", "Jhang"
      ],
      coverage: "150+",
      stats: { farms: "120+", districts: "25+" },
      mapImage: map1
    },
    {
      id: 2,
      title: "Nutrition",
      shortTitle: "Nutra",
      icon: Leaf,
      color: "#059669",
      description: "Premium feed additives and nutritional supplements for optimal herd health",
      locations: [
        "Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah",
        "Mirpurkhas", "Sanghar", "Badin", "Thatta", "Jacobabad",
        "Shikarpur", "Khairpur", "Tando Allahyar", "Matiari", "Dadu"
      ],
      coverage: "200+",
      stats: { farms: "180+", districts: "35+" },
      mapImage: map1
    },
    {
      id: 3,
      title: "Hygiene",
      shortTitle: "Hygiene",
      icon: Droplet,
      color: "#0891b2",
      description: "Milk hygiene solutions, teat health products, and dairy sanitation systems",
      locations: [
        "Peshawar", "Mardan", "Swabi", "Charsadda", "Nowshera",
        "Kohat", "Abbottabad", "Mansehra", "Haripur", "Bannu",
        "Dera Ismail Khan", "Swat", "Malakand", "Dir", "Chitral"
      ],
      coverage: "100+",
      stats: { farms: "85+", districts: "20+" },
      mapImage: map1
    },
    {
      id: 4,
      title: "Customized Solutions",
      shortTitle: "Custom",
      icon: Sparkles,
      color: "#7c3aed",
      description: "Tailored farm consultancy and integrated solutions for unique requirements",
      locations: [
        "Islamabad", "Rawalpindi", "Attock", "Chakwal", "Jhelum",
        "Mianwali", "Khushab", "Bhakkar", "Layyah", "Dera Ghazi Khan",
        "Rajanpur", "Muzaffargarh", "Lodhran", "Khanewal", "Bahawalnagar"
      ],
      coverage: "75+",
      stats: { farms: "60+", districts: "18+" },
      mapImage: map1
    }
  ];

  return (
    <div className="footprint-container">
      <SEO
        title="Geographic Footprint - Serving Farms Across Pakistan"
        description="Explore our nationwide presence in mechanization, nutrition, hygiene, and customized solutions. Serving dairy farms across all major regions of Pakistan."
        keywords="geographic footprint, Pakistan dairy farms, nationwide presence, farm services Pakistan, dairy solutions coverage"
        url={siteUrl + '/footprint'}
      />

      {/* Hero Section */}
      <header className="footprint-hero" data-navbar-theme="dark">
        <div className="footprint-hero-overlay"></div>
        <div className="footprint-hero-content">
          <div className="footprint-hero-badge">NATIONWIDE PRESENCE</div>
          <h1 className="footprint-hero-title">
            Geographic
            <span className="footprint-hero-accent">Footprint</span>
          </h1>
          <p className="footprint-hero-description">
            Serving farms across Pakistan with comprehensive dairy solutions in mechanization, nutrition, hygiene, and customized services
          </p>

          {/* Overall Stats */}
          <div className="footprint-hero-stats">
            <div className="footprint-stat-item">
              <div className="footprint-stat-number">525+</div>
              <div className="footprint-stat-label">Total Locations</div>
            </div>
            <div className="footprint-stat-item">
              <div className="footprint-stat-number">445+</div>
              <div className="footprint-stat-label">Farms Served</div>
            </div>
            <div className="footprint-stat-item">
              <div className="footprint-stat-number">98+</div>
              <div className="footprint-stat-label">Districts Covered</div>
            </div>
          </div>
        </div>
      </header>

      {/* Service Categories Section */}
      <section className="footprint-categories-section" data-navbar-theme="light">
        <div className="footprint-categories-container">
          <div className="footprint-section-header">
            <h2 className="footprint-section-title">Our Service Presence</h2>
            <p className="footprint-section-subtitle">
              Comprehensive coverage across Pakistan in four key service categories
            </p>
          </div>

          <div className="footprint-cards-grid">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="footprint-card"
                  style={{
                    backgroundImage: `url(${category.mapImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Background Overlay for readability */}
                  <div className="footprint-card-overlay"></div>

                  {/* Card Content */}
                  <div className="footprint-card-content-wrapper">
                    <div className="footprint-card-header">
                    <div
                      className="footprint-card-icon"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <IconComponent size={32} color={category.color} strokeWidth={2} />
                    </div>
                    <div className="footprint-card-badge" style={{ backgroundColor: category.color }}>
                      {category.coverage} Locations
                    </div>
                  </div>

                  <h3 className="footprint-card-title">{category.title}</h3>
                  <p className="footprint-card-description">{category.description}</p>

                  {/* Stats Row */}
                  <div className="footprint-card-stats">
                    <div className="footprint-card-stat">
                      <span className="footprint-card-stat-value">{category.stats.farms}</span>
                      <span className="footprint-card-stat-label">Farms</span>
                    </div>
                    <div className="footprint-card-stat-divider"></div>
                    <div className="footprint-card-stat">
                      <span className="footprint-card-stat-value">{category.stats.districts}</span>
                      <span className="footprint-card-stat-label">Districts</span>
                    </div>
                  </div>

                  {/* Location Pins */}
                  <div className="footprint-locations">
                    <div className="footprint-locations-header">
                      <MapPin size={16} color={category.color} />
                      <span>Key Coverage Areas</span>
                    </div>
                    <div className="footprint-pins-container">
                      {category.locations.map((location, index) => (
                        <div
                          key={index}
                          className="footprint-pin"
                          style={{
                            borderColor: category.color,
                            color: category.color
                          }}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div
                    className="footprint-card-footer"
                    style={{ backgroundColor: `${category.color}95` }}
                  >
                    <MapPin size={14} color="white" />
                    <span style={{ color: 'white' }}>
                      Expanding coverage continuously
                    </span>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="footprint-cta-section" data-navbar-theme="light">
        <div className="footprint-cta-container">
          <h2 className="footprint-cta-title">Ready to Partner With Us?</h2>
          <p className="footprint-cta-description">
            Join hundreds of farms across Pakistan benefiting from our comprehensive dairy solutions
          </p>
          <a href="/contact" className="footprint-cta-button">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footprint;
