import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <div className="section">
        <h2>1. Introduction</h2>
        <p>
          At Educative, we value your privacy and are committed to protecting your personal data. 
          This Privacy Policy outlines how we collect, use, and safeguard the information you provide 
          while using our website and services.
        </p>
      </div>

      <div className="section">
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal identification information (name, email address, phone number, etc.)</li>
          <li>Billing and payment information</li>
          <li>Course progress and activity data</li>
          <li>Device and browser data (IP address, cookies, etc.)</li>
        </ul>
      </div>

      <div className="section">
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide, operate, and maintain our platform</li>
          <li>Enhance your learning experience and personalize content</li>
          <li>Communicate updates, offers, and support messages</li>
          <li>Process payments and manage subscriptions</li>
          <li>Ensure compliance with legal obligations</li>
        </ul>
      </div>

      <div className="section">
        <h2>4. Sharing Your Information</h2>
        <p>We do not sell your personal information. However, we may share data with:</p>
        <ul>
          <li>Trusted service providers and partners (e.g., payment processors, analytics tools)</li>
          <li>Legal authorities when required by law or legal processes</li>
          <li>Other users, when you voluntarily share in forums or reviews</li>
        </ul>
      </div>

      <div className="section">
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent at any time</li>
          <li>Request data portability</li>
          <li>Object to or restrict certain data uses</li>
        </ul>
        <p>To exercise your rights, contact us at <a href="mailto:privacy@educative.solution.com">privacy@educative.solution.com</a>.</p>
      </div>

      <div className="section">
        <h2>6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your data against unauthorized 
          access, loss, misuse, or alteration. These include secure servers, encryption, and limited access controls.
        </p>
      </div>

      <div className="section">
        <h2>7. Cookies and Tracking Technologies</h2>
        <p>
          Our platform uses cookies to improve user experience, analyze traffic, and serve personalized content. 
          You can manage your cookie preferences through your browser settings.
        </p>
      </div>

      <div className="section">
        <h2>8. Third-Party Links</h2>
        <p>
          Our services may contain links to third-party websites. We are not responsible for the privacy practices or 
          content of those external sites.
        </p>
      </div>

      <div className="section">
        <h2>9. Children’s Privacy</h2>
        <p>
          Educative is not intended for children under the age of 13. We do not knowingly collect personal information 
          from children. If we become aware, we take steps to delete such data promptly.
        </p>
      </div>

      <div className="section">
        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify users of significant changes via email 
          or a notice on our website.
        </p>
      </div>

      <div className="section">
        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about this policy, please contact us at:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@educative.solution.com">privacy@educative.solution.com</a></li>
          <li>Phone: (+91) 8248-860-828</li>
          <li>Address: 123 Business St, Suite 100, Your City, Your State</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
