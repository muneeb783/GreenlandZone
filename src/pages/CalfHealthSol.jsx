import React, { useState } from 'react';
import '../styles/calfhealth.css';

const CalfHealthSol = () => {
 const [selectedProduct, setSelectedProduct] = useState(null);

 const products = [
   {
     id: 1,
     name: "Rovita New Born",
     description: "Essential newborn calf supplement",
     features: [
       `A vitamin, organic mineral, energy, protein and immune globulins to boost immune system supplement to 
       be used urgently within the first 18 hours after calves birth.`,
       "Boosts immune system development",
       "Provides essential nutrients for growth"
     ],
     image: "/api/placeholder/600/400",
     category: "Immunity"
   },
   {
     id: 2,
     name: "Rovita Roto-Corono",
     description: "Viral protection supplement",
     features: [
       `A vitamin, organic mineral, energy, protein and immune globulins to boost immune system supplement 
       to be used urgently within the first 18 hours after calves birth.`,
       "Protects against rotavirus and coronavirus",
       "Enhances digestive health"
     ],
     image: "/api/placeholder/600/400",
     category: "Immunity"
   },
   {
     id: 3,
     name: "Rovita Respira Paste",
     description: "Respiratory health support",
     features: [
       `Complimentary feed used to soothe the respiratory system and to secure airway of calves, yeanlings 
       and other animals.`,
       "Soothes respiratory irritation",
       "Supports healthy breathing"
     ],
     image: "/api/placeholder/600/400",
     category: "Respiratory"
   }
 ];

 return (
   <div className="calf-container calf-full-width">
     {/* Hero Section */}
     <header className="calf-hero-section">
       <div className="calf-hero-overlay"></div>
       <div className="calf-hero-content">
         <div className="calf-hero-badge">CALF HEALTH SOLUTIONS</div>
         <h1 className="calf-hero-title">
           Calf Health
           <span className="calf-hero-accent">Solutions</span>
         </h1>
         <p className="calf-hero-description">
           Comprehensive health solutions for optimal calf rearing and development
         </p>
         <div className="calf-hero-stats">
           <div className="calf-stat-item">
             <div className="calf-stat-icon">🐄</div>
             <div className="calf-stat-number">95%</div>
             <div className="calf-stat-label">Survival Rate</div>
           </div>
           <div className="calf-stat-item">
             <div className="calf-stat-icon">💪</div>
             <div className="calf-stat-number">40%</div>
             <div className="calf-stat-label">Stronger Immunity</div>
           </div>
           <div className="calf-stat-item">
             <div className="calf-stat-icon">📈</div>
             <div className="calf-stat-number">25%</div>
             <div className="calf-stat-label">Better Growth</div>
           </div>
         </div>
       </div>
     </header>

     {/* Features Section */}
     <section className="calf-features-section calf-full-width" data-navbar-theme="light">
       <div className="calf-features-container">
         <h2 className="calf-features-title">Why Focus on Calf Health?</h2>
         <div className="calf-features-grid">
           <div className="calf-feature-card">
             <div className="calf-feature-icon">🛡️</div>
             <h3>Disease Prevention</h3>
             <p>Early intervention prevents costly health issues later</p>
           </div>
           <div className="calf-feature-card">
             <div className="calf-feature-icon">🌱</div>
             <h3>Optimal Growth</h3>
             <p>Healthy calves develop into productive adult cattle</p>
           </div>
           <div className="calf-feature-card">
             <div className="calf-feature-icon">💰</div>
             <h3>Economic Benefits</h3>
             <p>Reduced mortality and treatment costs</p>
           </div>
           <div className="calf-feature-card">
             <div className="calf-feature-icon">🎯</div>
             <h3>Long-term Performance</h3>
             <p>Foundation for lifetime productivity</p>
           </div>
         </div>
       </div>
     </section>

     {/* Information Section */}
     <section className="calf-info-section calf-full-width" data-navbar-theme="light">
       <div className="calf-info-container">
         <div className="calf-content-section">
           <h1 className="calf-section-title">Calf Health Introduction</h1>
           <div className="calf-highlight-box">
             <div className="calf-highlight-bar"></div>
             <p className="calf-highlight-content">
               The aim of successful calf rearing is to produce a healthy calf which is capable of optimum performance throughout its life from birth through to finishing. A suitable calf rearing system has the following characteristics:
               Good animal performance with minimal disease and morbidity
               Low cost input
               Low labour input
               To ensure a healthy calf, the aim is to minimise the calf's exposure to disease, and maximise its defence against disease. In minimising a calf's exposure to disease, providing a clean, disease-free environment is fundamental. This involves:

               Thorough cleaning and disinfection, before and during the calving season, of all areas used by calves.
               Providing a clean, straw-bedded lying area with no draughts and good ventilation.
               Accommodating calves in batches so that young calves are never mixed with or accommodated in areas used by older calves.
               The objective of a well-designed herd health program is to address multiple areas of management in order to reduce the likelihood of disease outbreaks and is a necessary step if economic returns are to be realized. A herd health program that includes biosecurity, vaccination, and the culling of carrier animals, drawn up in consultation with a veterinary practitioner, is the best way to address disease problems.
             </p>
           </div>
         </div>

         <div className="calf-content-section">
           <h1 className="calf-section-title">Calf Health Infectious Disease Agents</h1>
           
           <div className="calf-disease-section">
             <h3 className="calf-subsection-title">Calf Scours</h3>
             <p className="calf-text">
               Scours are the main causes of calf mortality. The majority of calf scours are caused by six organisms: viruses such as rotavirus and coronavirus, bacteria such as E. coli and Salmonella sp., and protozoa, such as cryptosporidia and coccidia. As outlined above, vaccination of the dam will help reduce the probability of calf scours but cannot solely be depended upon for prevention on calf Health.
               Furthermore, there are no vaccines available to combat protozoa. However, good hygiene and 
               management practices will reduce the likelihood of infection from cryptosporidia and coccidia. 
               Diarrhoea in calves results in losses of water and electrolytes, such as sodium, bicarbonate, 
               chlorine, and potassium. Calves with diarrhoea can lose 10-12 per cent of their body weight in 
               water losses. Depending on the severity of the diarrhoea and dehydration, calves may need to 
               receive oral electrolyte solutions once daily or as many as four times a day. Calves should be 
               fed their regular allowance of milk when receiving oral electrolytes. Scientific evidence has 
               accumulated that continued milk feeding does not worsen or prolong the course of diarrhoea, 
               despite a somewhat lowered digestive capacity. The milk supplies the calf with energy and other 
               nutrients that are essential for survival.
             </p>
           </div>

           <div className="calf-disease-section">
             <h3 className="calf-subsection-title">Calf Pneumonia</h3>
             <p className="calf-text">
               The underlying cause of pneumonia or bovine respiratory disease (BRD) is extremely complex with 
               the involvement of viruses, bacteria and mycoplasma. The incidence of infection is usually high, 
               but the mortality rate is variable. The main viruses that cause outbreaks of pneumonia in calves 
               are IBR, RSV, PI-3, and BVD. Factors associated with susceptibility to pneumonia in calves are; 
               stress (disbudding, castration), overcrowding, inadequate ventilation, draughts, fluctuating 
               temperatures, poor nutrition and/or concurrent disease. In most cases the main infective agent is 
               a virus, which causes respiratory tract damage.This effect is worsened by Mycoplasmas and secondary
               bacterial infections (e.g. Mannheimia (Pasteurella) haemolytica). Viruses are unaffected by 
               antibiotics, however, antibiotic treatment is usually administered to kill off the secondary 
               bacterial infections and offer the calf the opportunity to fight the disease. In order to direct 
               the appropriate treatment strategy, nasal swabs should be submitted to the Regional Veterinary 
               Laboratory for accurate identification of the pathogen(s) involved. Calves should be vaccinated 
               where specific problems arise. Veterinary advice should be sought and the widest protection against 
               pneumonia will be achieved where a vaccination programme includes the three most common respiratory 
               viruses (IBR, RSV and PI-3) and the bacterial pathogen Mannheimia (Pasteurella) haemolytica.
             </p>
           </div>

           <div className="calf-disease-section">
             <h3 className="calf-subsection-title">Calf Immunity</h3>
             <p className="calf-text">
               In the bovine species, immunoglobulins do not cross the placenta in utero, and the newborn calf is, 
               therefore, dependent on antibodies obtained through ingestion of colostrum. Maternal colostrum 
               provides the main source of immunoglobulins (Ig) and other nutrients for the newborn calf. If the 
               serum immunoglobulin concentration is less than 10 mg/ml when sampled between 24 and 48 h of age, 
               calves may be defined as having failure of passive transfer (FPT) of protective colostral 
               immunoglobulins. Calves that receive inadequate colostrum are more susceptible to neonatal 
               infections. This problem can be particularly severe in calves that have been moved off their 
               farm of origin and through markets. In these circumstances and calf Health, there is greater risk 
               of exposure to infection. Foetal growth retardation or a stressful birth process is likely to 
               reduce the ability of the intestine to absorb immunoglobulins from colostrum.
             </p>
           </div>

           <div className="calf-disease-section">
             <h3 className="calf-subsection-title">Variation in immunoglobulin concentration</h3>
             <p className="calf-text">
               Immunoglobulins help to maintain the animal's health and reduce mortality rates by helping to 
               eliminate foreign agents in the body (e.g. bacteria and viruses). Considerable variation exists 
               between cows with respect to immunoglobulin concentration in the colostrum. No significant 
               difference between colostrum IgG1 concentrations in either the front or hindquarters of the 
               udder have been reported however, a large variation in colostrum yield exists between beef and 
               dairy cows (Table 1). Research at Teagasc, Grange has clearly shown that dairy calves with low 
               levels of immunoglobulins had the highest incidence of diarrhoea, respiratory disease and mortality 
               compared with age matched suckled beef calves (Earley et al., 2000). This is primarily due to the 
               much lower concentration of IgG in colostrum of dairy cows compared with suckler cows and Calf 
               Health.
             </p>
           </div>
         </div>
       </div>
     </section>

     {/* Product Grid */}
     <section className="calf-products-section calf-full-width" data-navbar-theme="light">
       <div className="calf-products-container">
         <h2 className="calf-section-title">Our Product Range</h2>
         <div className="calf-products-grid">
           {products.map(product => (
             <div 
               key={product.id} 
               className="calf-product-card"
               onClick={() => setSelectedProduct(product)}
             >
               <div className="calf-product-category">{product.category}</div>
               <div className="calf-product-image-container">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="calf-product-image"
                 />
                 <div className="calf-product-overlay">
                   <button className="calf-view-details-btn">View Details</button>
                 </div>
               </div>
               <div className="calf-product-content">
                 <h3 className="calf-product-title">{product.name}</h3>
                 <p className="calf-product-description">{product.description}</p>
                 <ul className="calf-product-features">
                   {product.features.slice(0, 2).map((feature, index) => (
                     <li key={index} className="calf-feature-item">
                       <span className="calf-feature-bullet">✓</span>
                       {feature}
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>

     {/* CTA Section */}
     <section className="calf-cta-section calf-full-width" data-navbar-theme="light">
       <div className="calf-cta-container">
         <h2 className="calf-cta-title">Invest in Your Calves' Future</h2>
         <p className="calf-cta-description">
           Get the right health solutions for optimal calf development
         </p>
         <div className="calf-cta-buttons">
           <button className="calf-btn-primary">Get Quote</button>
           <button className="calf-btn-secondary">Download Guide</button>
         </div>
       </div>
     </section>

     {/* Product Modal */}
     {selectedProduct && (
       <div className="calf-modal-overlay" onClick={() => setSelectedProduct(null)}>
         <div className="calf-modal-content" onClick={(e) => e.stopPropagation()}>
           <button className="calf-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
           <div className="calf-modal-grid">
             <div className="calf-modal-image">
               <img src={selectedProduct.image} alt={selectedProduct.name} />
             </div>
             <div className="calf-modal-info">
               <div className="calf-modal-category">{selectedProduct.category}</div>
               <h2 className="calf-modal-title">{selectedProduct.name}</h2>
               <p className="calf-modal-description">{selectedProduct.description}</p>
               <h3 className="calf-modal-features-title">Key Features:</h3>
               <ul className="calf-modal-features">
                 {selectedProduct.features.map((feature, index) => (
                   <li key={index}>
                     <span className="calf-feature-icon">✓</span>
                     {feature}
                   </li>
                 ))}
               </ul>
               <div className="calf-modal-actions">
                 <button className="calf-btn-primary">Request Quote</button>
                 <button className="calf-btn-secondary">Ask Question</button>
               </div>
             </div>
           </div>
         </div>
       </div>
     )}
   </div>
 );
};

export default CalfHealthSol;