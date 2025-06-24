import { useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/calfhealth.css'

const CalfHealthSol = () => {
  // Sample product data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Rovita New Born",
      description: "Rovita New Born",
      features: [
        `A vitamin, organic mineral, energy, protein and immune globulins to boost immune system supplement to 
        be used urgently within the first 18 hours after calves birth.`
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Rovita Roto-Corono",
      description: "Rovita Roto-Corono",
      features: [
        `A vitamin, organic mineral, energy, protein and immune globulins to boost immune system supplement 
        to be used urgently within the first 18 hours after calves birth.`
      ],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Rovita Respira Paste",
      description: "Rovita Respira Paste",
      features: [
        `Complimentary feed used to soothe the respiratory system and to secure airway of calves, yeanlings 
        and other animals.`
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="calf-health-page">
      {/* Header */}
      <header className="calf-header">
        <div className="calf-container calf-header-content">
          <h1 className="calf-header-title">Dairy Farm Equipment Solutions</h1>
          <p className="calf-header-subtitle">Comprehensive solutions for modern dairy farming</p>
        </div>
      </header>

      <div className="calf-container-fluid px-4">
        <div>
          <h1 className="calf-body-text">Calf Health Introduction</h1>
          <div className="calf-green-container">
            <div className="calf-green-bar"></div>
            <p className="calf-body-text calf-green-content">The aim of successful calf rearing is to produce a healthy calf which is capable of optimum performance throughout its life from birth through to finishing. A suitable calf rearing system has the following characteristics:
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
        <div>
          <h1 className="calf-body-text">Calf Health Infectious Disease Agents</h1>
            <h3 className="calf-body-text">
              Calf Scours 
            </h3>
            <p className="calf-body-text">Scours are the main causes of calf mortality. The majority of calf scours are caused by six organisms: viruses such as rotavirus and coronavirus, bacteria such as E. coli and Salmonella sp., and protozoa, such as cryptosporidia and coccidia. As outlined above, vaccination of the dam will help reduce the probability of calf scours but cannot solely be depended upon for prevention on calf Health.
            Furthermore, there are no vaccines available to combat protozoa. However, good hygiene and 
            management practices will reduce the likelihood of infection from cryptosporidia and coccidia. 
            Diarrhea in calves results in losses of water and electrolytes, such as sodium, bicarbonate, 
            chlorine, and potassium. Calves with diarrhoea can lose 10-12 per cent of their body weight in 
            water losses. Depending on the severity of the diarrhoea and dehydration, calves may need to 
            receive oral electrolyte solutions once daily or as many as four times a day. Calves should be 
            fed their regular allowance of milk when receiving oral electrolytes. Scientific evidence has 
            accumulated that continued milk feeding does not worsen or prolong the course of diarrhoea, 
            despite a somewhat lowered digestive capacity. The milk supplies the calf with energy and other 
            nutrients that are essential for survival.
            </p>
            <h3 className="calf-body-text">Calf Pneumonia</h3>
            <p className="calf-body-text">
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
            <h3 className="calf-body-text">Calf Immunity</h3>
            <p className="calf-body-text">
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
            <h3 className="calf-body-text">Variation in immunoglobulin concentration</h3>
            <p className="calf-body-text">
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

        {/* Product Grid */}
        <div className='calf-container calf-dairy-products-container'>
            <div className="calf-products-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="calf-product-card">
      <div className="calf-product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="calf-product-image"
        />
        <div className="calf-product-title-overlay">
          <h3 className="calf-product-title">
            {product.name}
          </h3>
        </div>
      </div>
      <div className="calf-product-content">
        <p className="calf-product-description">{product.description}</p>
        <ul className="calf-product-features">
          {product.features.map((feature, index) => (
            <li key={index} className="calf-feature-item">
              <span className="calf-feature-bullet">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalfHealthSol;