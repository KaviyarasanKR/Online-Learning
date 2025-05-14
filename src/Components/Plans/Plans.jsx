import React from 'react';
import './Plans.css';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    title: 'Personal Plan',
    subtitle: 'For you',
    users: 'Individual',
    price: '₹850 per month',
    billingNote: 'Billed monthly or annually. Cancel anytime.',
    button: 'Start subscription',
    totalPrice: '1039.00',
    features: [
      'Access to 12,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
    ],
  },
  {
    title: 'Team Plan',
    subtitle: 'For your team',
    users: '2 to 20 people',
    price: '₹2,000 a month per user',
    billingNote: 'Billed annually. Cancel anytime.',
    button: 'Start subscription',
    totalPrice: '2000.00',
    features: [
      'Access to 12,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
      'Analytics and adoption reports',
    ],
  },
  {
    title: 'Enterprise Plan',
    subtitle: 'For your whole organization',
    users: 'More than 20 people',
    price: 'Contact sales for pricing',
    billingNote: '',
    button: 'Start Free Trail',
    features: [
      'Access to 27,000+ top courses',
      'Certification prep',
      'Goal-focused recommendations',
      'AI-powered coding exercises',
      'Advanced analytics and insights',
      'Dedicated customer success team',
      'International course collection featuring 15 languages',
      'Customizable content',
      'Hands-on tech training with add-on',
      'Strategic implementation services with add-on',
    ],
  },
];

const Plans = () => {
  const navigate = useNavigate();

  const handleSubscribe = (planType) => {
    navigate('/checkout', { state: { plan: planType } });
  };

  return (
    <div className="plans-section">
      <h1>Choose a plan for success</h1>
      <p>
        Don't want to buy courses one by one? Pick a plan to help you, your team, or your
        organization achieve outcomes faster.
      </p>

      <div className="plan-cards">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.title}</h3>
            <p className="subtitle">{plan.subtitle}</p>
            <p className="users">{plan.users}</p>
            <h4>{plan.price}</h4>
            {plan.billingNote && <p className="billing-note">{plan.billingNote}</p>}

            {plan.title === 'Enterprise Plan' ? (
              <button className="plan-button">{plan.button}</button>
            ) : (
              <button
                className="plan-button"
                onClick={() =>
                  handleSubscribe(plan.title === 'Team Plan' ? 'team' : 'personal')
                }
              >
                {plan.button}
              </button>
            )}

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;





