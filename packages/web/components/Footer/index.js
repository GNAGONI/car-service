import React from 'react';

import FooterContent from './FooterContent';
import SiteInfo from './SiteInfo';

const Footer = () => (
  <section id="footer" as="footer" className="footer">
    <FooterContent>
      <FooterContent.Item title="Registered office and headquarters">
        <address>
          <span>Car.service, Gower House, United Kingdom</span>
          <span>Registered number: 999000888</span>
        </address>
      </FooterContent.Item>
      <FooterContent.SocialInfo title="Follow us">
        <FooterContent.SocialInfo.Item link="https://twitter.com/car.service" icon="twitter" name="Twitter" />
        <FooterContent.SocialInfo.Item link="https://www.facebook.com/car.service/" icon="facebook" name="Facebook" />
        <FooterContent.SocialInfo.Item
          link="https://www.instagram.com/car.service/"
          icon="instagram"
          name="Instagram"
        />
        <FooterContent.SocialInfo.Item
          link="https://www.youtube.com/channel/car.service"
          icon="youtube"
          name="Youtube"
        />
      </FooterContent.SocialInfo>
    </FooterContent>
    <SiteInfo>
      <SiteInfo.Item link="/" text="Terms &amp; conditions" />
      <SiteInfo.Item link="/" text="Cookie policy" />
      <SiteInfo.Item link="/" text="Privacy policy" />
    </SiteInfo>
  </section>
);

export default Footer;
