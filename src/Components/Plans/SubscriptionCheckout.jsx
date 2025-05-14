import React, { useState } from 'react';
import './SubscriptionCheckout.css';
import visaIcon from '../../assets/visa.png'; 
import mastercardIcon from '../../assets/mastercard.png';
import amexIcon from '../../assets/amex.jpg';
import discoverIcon from '../../assets/discover.png';
import dinersIcon from '../../assets/diners.png';
import GooglePayButton from '@google-pay/button-react';
const SubscriptionCheckout = () => {
  const [billingType, setBillingType] = useState('monthly');

  const getPrice = () => {
    return billingType === 'monthly' ? '1039.00' : '10200.00';
  };

  return (
    <div className="checkout-wrapper">
      <div className="checkout-left">
        <h2>Subscribe to Personal Plan</h2>

        <div className="billing-toggle">
          <div
            className={`billing-option ${billingType === 'monthly' ? 'selected' : ''}`}
            onClick={() => setBillingType('monthly')}
          >
            <input type="radio" checked={billingType === 'monthly'} readOnly />
            <div>
              <div>Monthly Access</div>
              <div className="price">₹1,039/mo</div>
              <small>billed monthly</small>
            </div>
          </div>

          <div
            className={`billing-option ${billingType === 'yearly' ? 'selected' : ''}`}
            onClick={() => setBillingType('yearly')}
          >
            <input type="radio" checked={billingType === 'yearly'} readOnly />
            <div>
              <div>Yearly Access</div>
              <div className="price">₹850/mo</div>
              <small>₹10,200 billed yearly</small>
              <div className="save-tag">Save ₹2,268</div>
            </div>
          </div>
        </div>

        <ul className="features-list">
          <li>✔ Access to over 12,000 of our top courses in tech, business, and more</li>
          <li>✔ Hands-on learning experiences to build your skills</li>
          <li>✔ Course recommendations to help you start learning faster</li>
        </ul>

        <div className="form-section">
          <h3>Billing Address</h3>
          <label>Country</label>
          <select>
            <option>India</option>
          </select>

          <label>State / Union Territory</label>
          <select>
            <option>Please select...</option>
            <option>Tamil Nadu</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
          </select>
          <p className="tax-note">
            Udemy is required by law to collect applicable transaction taxes for purchases
            made in certain tax jurisdictions.
          </p>
        </div>

        <div className="form-section">
          <h3>Payment Method <span className="secure">Secure and encrypted 🔒</span></h3>
          <div className="payment-icons">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="MasterCard" />
            <img src={amexIcon} alt="Amex" />
            <img src={discoverIcon} alt="Discover" />
            <img src={dinersIcon} alt="Diners" />
          </div>

          <input type="text" placeholder="Card number" />
          <div className="row">
            <input type="text" placeholder="MM/YY" />
            <input type="text" placeholder="CVC/CVV" />
          </div>
          <input type="text" placeholder="Name on card" />
          <p className="card-note">This card will be stored on your account</p>
        </div>
      </div>

      <div className="checkout-right">
        <div className="summary-box">
          <h4>Summary</h4>
          <div className="summary-line">
            <span>{billingType === 'monthly' ? 'Monthly access:' : 'Yearly access:'}</span>
            <span>{billingType === 'monthly' ? '₹1,039/month' : '₹10,200/year'}</span>
          </div>
          <div className="summary-line total">
            <span>Total:</span>
            <span>{billingType === 'monthly' ? '₹1,039/month' : '₹10,200/year'}</span>
          </div>
          <p className="cancel-note">
            Cancel anytime by visiting the Subscriptions page in your account.
          </p>
          <p className="terms-note">
            No refunds or credits for partial subscription periods unless required by law.
            Your Personal Plan begins at checkout with an immediate charge and auto-renews
            {billingType === 'monthly' ? ' monthly.' : ' yearly.'} Cancel prior to the next billing
            period to avoid charges. By clicking "Start subscription" you agree to our{' '}
            <a href="#">Terms</a> and authorize recurring charges.
          </p>

         <div className="google-pay-button-wrapper">
  <GooglePayButton
    environment="TEST"
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
        merchantId: '12345678901234567890',
        merchantName: 'Online Learning Demo',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: getPrice(),
        currencyCode: 'INR',
        countryCode: 'IN',
      },
    }}
    onLoadPaymentData={paymentData => {
      console.log('Payment success', paymentData);
    }}
    buttonSizeMode="fill"
  />
</div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCheckout;
