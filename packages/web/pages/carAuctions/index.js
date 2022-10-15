import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import client from '@car-service/api-client';

import Page from 'components/page';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import Intro from 'containers/intro';
import FeaturedListings from 'components/featuredListings';
import AuctionContent from 'components/carAuction/auctionContent';
import AsideRecomended from 'components/carAuction/asideRecomended';
import Benefits from 'components/carAuction/benefits';
import Model from 'components/carAuction/model';
import EndingSoon from 'components/carAuction/endingSoon';
import Stories from 'components/carAuction/stories';
import AuctionFeatures from 'components/carAuction/auctionFeatures';
import Blog from 'components/carAuction/blog';
import CarAuctionHeader from 'components/carAuction/carAuctionHeader';

export default class CarAuctions extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    fields: PropTypes.shape({
      search_block_title: PropTypes.string,
      search_block_description: PropTypes.string,
      featured_block_title: PropTypes.string,
      featured_block_description: PropTypes.string,
      trade_partners_block_title: PropTypes.string,
      trade_partners_block_subtitle: PropTypes.string,
      trade_partners_block_description: PropTypes.string,
      benefits_block_title: PropTypes.string,
      benefits_block_subtitle: PropTypes.string,
      social_block_description: PropTypes.string,
      ending_soon_block_title: PropTypes.string,
      ending_soon_block_description: PropTypes.string,
      customers_block_title: PropTypes.string,
      customers_block_description: PropTypes.string,
      latest_auction_block_title: PropTypes.string,
      latest_auction_block_description: PropTypes.string,
    }),
  };

  static defaultProps = {
    title: '',
    fields: {},
  };

  static getInitialProps = async () => {
    try {
      return await client.pageData.getCarAuctionPageData();
    } catch (e) {
      return {};
    }
  };

  render() {
    const { title, fields = {} } = this.props;

    const {
      search_block_title: searchBlockTitle,
      search_block_description: searchBlockDescription,
      featured_block_title: featuredBlockTitle,
      featured_block_description: featuredBlockDescription,
      trade_partners_block_title: tradePartnersBlockTitle,
      trade_partners_block_subtitle: tradePartnersBlockSubtitle,
      trade_partners_block_description: tradePartnersBlockDescription,
      benefits_block_title: benefitsBlockTitle,
      benefits_block_subtitle: benefitsBlockSubtitle,
      social_block_description: socialBlockDescription,
      ending_soon_block_title: endingSoonBlockTitle,
      ending_soon_block_description: endingSoonBlockDescription,
      customers_block_title: customersBlockTitle,
      customers_block_description: customersBlockDescription,
      latest_auction_block_title: latestAuctionBlockTitle,
      latest_auction_block_description: latestAuctionBlockDescription,
    } = fields;

    return (
      <Page title={title}>
        <div>
          <DefaultHeader />
          <Intro
            showTopTitle
            showLeftTitle={false}
            searchBlockTitle={searchBlockTitle}
            searchBlockDescription={searchBlockDescription}
          />
          <main id="main">
            <CarAuctionHeader />

            <FeaturedListings title={featuredBlockTitle} content={featuredBlockDescription} />

            <AuctionContent
              title={tradePartnersBlockTitle}
              subtitle={tradePartnersBlockSubtitle}
              description={tradePartnersBlockDescription}
            />

            <AsideRecomended />

            <Benefits itle={benefitsBlockTitle} subtitle={benefitsBlockSubtitle} />

            <Model content={socialBlockDescription} />

            <EndingSoon title={endingSoonBlockTitle} description={endingSoonBlockDescription} />

            <Stories title={customersBlockTitle} description={customersBlockDescription} />

            <AuctionFeatures />

            <Blog title={latestAuctionBlockTitle} description={latestAuctionBlockDescription} />
          </main>
          <Footer />
        </div>
      </Page>
    );
  }
}
