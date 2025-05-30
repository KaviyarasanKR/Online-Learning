import './CourseDetails.css';
import { coursesData } from '../../data';
import { useParams, useNavigate } from 'react-router-dom';
import GooglePayButton from '@google-pay/button-react';
import VideoPlayer from '../../Components/VideoPlayer';
import { useState } from 'react';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(course => course.id === parseInt(id));
  const [activePhase, setActivePhase] = useState(null); // 🚀 Track which phase is active

  const handleStart = (phase) => {
    setActivePhase(phase);
  };

  return (
    <div className="course_details">
      <div className="details_top">
        <div className="details_left">
          <h2 className="name">{course.name}</h2>
          <p className="desc">{course.courseDetail.description}</p>
          <p className="lang">{course.courseDetail.language}</p>
          <p className="date">{course.courseDetail.date}</p>
          <div className="price_container">
            <h3 className="price">Price: ${course.price}</h3>
            <div className="google-pay-button-wrapper">
              <GooglePayButton
                environment="TEST"
                buttonSizeMode="fill"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [{
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
                  }],
                  merchantInfo: {
                    merchantId: '17613812255336763067',
                    merchantName: 'Demo only (you will not be charged !!)',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: course.price.toFixed(2),
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                }}
                onLoadPaymentData={paymentData => {
                  console.log('TODO: send order to server', paymentData.paymentMethodData);
                  navigate('/confirm');
                }}
              />
            </div>
          </div>
        </div>
        <div className="details_right">
          <img src={course.image} alt="" className="course_img" />
        </div>
      </div>

      <div className="course_journey">
        <h2>Curriculum</h2>

        {/* Phase 01 */}
        <fieldset className="field_container">
          <legend className="phase">Phase 01 <button onClick={() => handleStart(1)}>Start</button></legend>
          <h3 className="p_name">{course.phase1.phaseName}</h3>
          <ul>
            <li>{course.phase1.phaseList}</li>
            <li>{course.phase1.phaseList1}</li>
            <li>{course.phase1.phaseList2}</li>
            <li>{course.phase1.phaseList3}</li>
            <li>{course.phase1.phaseList4}</li>
          </ul>
          {activePhase === 1 && <VideoPlayer url={course.phase1.videoUrl} />}
        </fieldset>

        {/* Phase 02 */}
        <fieldset className="field_container">
          <legend className="phase">Phase 02 <button onClick={() => handleStart(2)}>Start</button></legend>
          <h3 className="p_name">{course.phase2.phaseName}</h3>
          <ul>
            <li>{course.phase2.phaseList}</li>
            <li>{course.phase2.phaseList1}</li>
            <li>{course.phase2.phaseList2}</li>
            <li>{course.phase2.phaseList3}</li>
            <li>{course.phase2.phaseList4}</li>
          </ul>
          {activePhase === 2 && <VideoPlayer url={course.phase2.videoUrl} />} {/* add actual phase2 video URL */}
        </fieldset>

        {/* Phase 03 */}
        <fieldset className="field_container">
          <legend className="phase">Phase 03 <button onClick={() => handleStart(3)}>Start</button></legend>
          <h3 className="p_name">{course.phase3.phaseName}</h3>
          <ul>
            <li>{course.phase3.phaseList}</li>
            <li>{course.phase3.phaseList1}</li>
            <li>{course.phase3.phaseList2}</li>
            <li>{course.phase3.phaseList3}</li>
            <li>{course.phase3.phaseList4}</li>
          </ul>
          {activePhase === 3 && <VideoPlayer url={course.phase3.videoUrl} />}
        </fieldset>

        {/* Phase 04 */}
        <fieldset className="field_container">
          <legend className="phase">Phase 04 <button onClick={() => handleStart(4)}>Start</button></legend>
          <h3 className="p_name">{course.phase4.phaseName}</h3>
          <ul>
            <li>{course.phase4.phaseList}</li>
            <li>{course.phase4.phaseList1}</li>
            <li>{course.phase4.phaseList2}</li>
            <li>{course.phase4.phaseList3}</li>
            <li>{course.phase4.phaseList4}</li>
          </ul>
          {activePhase === 4 && <VideoPlayer url={course.phase4.videoUrl} />}
        </fieldset>
      </div>
    </div>
  );
};

export default CourseDetails;
