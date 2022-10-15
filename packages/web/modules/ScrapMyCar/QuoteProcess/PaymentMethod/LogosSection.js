import React from 'react';
import { natwest, tsb, lloydsBank, barclays, hsbc, santander } from 'static/images';

const LogosSection = () => (
  <ul className="payment-ways">
    <li>
      <img src={natwest} alt="NatWest" width="114" />
    </li>
    <li>
      <img src={tsb} alt="TSB" width="67" />
    </li>
    <li>
      <img src={lloydsBank} alt="LLOYDS BANK" width="78" />
    </li>
    <li>
      <img src={barclays} alt="Barclays" width="83" />
    </li>
    <li>
      <img src={hsbc} alt="HSBC" width="51" />
    </li>
    <li>
      <img src={santander} alt="Santander" width="87" />
    </li>
  </ul>
);

export default LogosSection;
