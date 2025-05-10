import React from 'react';
import './plans.css';
import GooglePayButton from '@google-pay/button-react';

const plans = [
  {
    title: 'Personal Plan',
    subtitle: 'For you',
    users: 'Individual',
    price: '₹850 per month',
    billingNote: 'Billed monthly or annually. Cancel anytime.',
    button: 'Start subscription',
    totalPrice: '850.00',
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
    button: 'Request a demo',
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
            <button className="plan-button">{plan.button}</button>

            {(plan.title === 'Personal Plan' || plan.title === 'Team Plan') && (
              <div className="google-pay-button-wrapper">
                <GooglePayButton
                  environment="TEST"
                  buttonSizeMode="fill"
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: 'CARD',
                        parameters: {
                          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                          allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                          type: 'PAYMENT_GATEWAY',
                          parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                          },
                        },
                      },
                    ],
                    merchantInfo: {
                      merchantId: '17613812255336763067',
                      merchantName: 'Demo only (you will not be charged !!)',
                    },
                    transactionInfo: {
                      totalPriceStatus: 'FINAL',
                      totalPriceLabel: 'Total',
                      totalPrice: plan.totalPrice,
                      currencyCode: 'INR',
                      countryCode: 'IN',
                    },
                  }}
                  onLoadPaymentData={(paymentData) => {
                    console.log('TODO: send order to server', paymentData.paymentMethodData);
                    // If using React Router v6, replace below with navigate('/confirm');
                    // Example: const navigate = useNavigate(); navigate('/confirm');
                  }}
                />
              </div>
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
