const nextRoutes = require('next-routes');

const pages = nextRoutes();

pages.add('index', '/');

// Sign In
pages.add('signIn', '/sign-in');

// Register
pages.add('register/customer', '/register/customer');

// Forgot password
pages.add('forgotPassword', '/forgot-password');

// Reset password
pages.add('resetPassword', '/reset-password/:resetToken');

// TODO: Uncomment when Car Auction pages will be refactored to use slugs
// Car Auctions
// pages
//   .add('carAuctions', '/car-auctions')
//   .add('carAuctions/searchResults', '/car-auctions/search-results')
//   .add('carAuctions/carAuctionDetails', '/car-auction/:id')
//
//   // Car Makes
//   .add('carAuctions/carMakes', '/car-auctions/car-makes')
//   .add('carAuctions/carMakes/carMake', '/car-auctions/car-makes/:carMake')
//   .add('carAuctions/carMakes/carModel', '/car-auctions/car-makes/:carMake/:carModel')
//
//   // Locations
//   .add('carAuctions/locations', '/car-auctions/locations')
//   .add('carAuctions/locations/region', '/car-auctions/locations/:region')
//   .add('carAuctions/locations/area', '/car-auctions/locations/:region/:area')
//   .add('carAuctions/locations/town', '/car-auctions/locations/:region/:area/:town')
//
//   // Auction Your Car
//   .add('car-auctions/auctionYourCar', '/car-auctions/auction-your-car');

// Scrap My Car
pages
  .add('scrapMyCar', '/scrap-my-car')
  // .add('scrapMyCar/howItWorks', '/scrap-my-car/how-it-works')

  // Locations
  // .add('scrapMyCar/locations', '/scrap-my-car/locations')
  // .add('scrapMyCar/locations/region', '/scrap-my-car/locations/:region')
  // .add('scrapMyCar/locations/area', '/scrap-my-car/locations/:region/:area')
  // .add('scrapMyCar/locations/county', '/scrap-my-car/locations/:region/:area/:county')
  // .add('scrapMyCar/locations/town', '/scrap-my-car/locations/:region/:area/:county/:town')

  // Car Makes
  // .add('scrapMyCar/carMakes', '/scrap-my-car/car-makes')
  // .add('scrapMyCar/carMakes/carMake', '/scrap-my-car/car-makes/:carMake')

  // FAQs
  // .add('scrapMyCar/faqs', '/scrap-my-car/faqs')
  // .add('scrapMyCar/faqCategory', '/scrap-my-car/faqs/:category')
  // .add('scrapMyCar/faqPost', '/scrap-my-car/faqs/:category/:post')

  // Quoting steps
  .add('scrapMyCar/enterDetails', '/scrap-my-car/enter-details')
  .add('scrapMyCar/onlineQuotation', '/scrap-my-car/online-quote')
  .add('scrapMyCar/arrangeACollection', '/scrap-my-car/arrange-a-collection')
  .add('scrapMyCar/paymentMethod', '/scrap-my-car/payment-method')
  .add('scrapMyCar/confirmation', '/scrap-my-car/confirmation')
  .add('scrapMyCar/notMyCar', '/scrap-my-car/not-my-car');

// Customer portal (Dashboard)
pages
  .add('myAccount', '/my-account')

  // Scrap My Car
  .add('myAccount/scrapMyCar', '/my-account/scrap-my-car')
  .add('myAccount/scrapMyCar/quoteHistory', '/my-account/scrap-my-car/quote-history')
  .add('myAccount/scrapMyCar/scrappedCars', '/my-account/scrap-my-car/scrapped-cars')

  // Settings
  .add('myAccount/settings', '/my-account/settings')
  .add('myAccount/settings/editProfile', '/my-account/settings/edit-profile')
  .add('myAccount/settings/changePassword', '/my-account/settings/change-password');

// Media
// pages
//   .add('media', '/media')

//   // News
//   .add('media/news', '/media/news')
//   .add('media/news/newsCategory', '/media/news/:category')
//   .add('media/news/newsPost', '/media/news/:category/:post')

//   // Blog
//   .add('media/blog', '/media/blog')
//   .add('media/blogCategory', '/media/:category')
//   .add('media/blogPost', '/media/:category/:post')

//   // Guides
//   .add('media/guides', '/media/guides')
//   .add('media/guidesCategory', '/media/guides/:category')
//   .add('media/guidesPost', '/media/guides/:category/:post')

//   // Videos
//   .add('media/videos', '/media/videos')
//   .add('media/videoCategory', '/media/videos/:category')
//   .add('media/videoPost', '/media/videos/:category/:post')

//   // Reviews
//   .add('media/reviews', '/media/reviews')
//   .add('media/reviewsCategory', '/media/reviews/:category')
//   .add('media/reviewsPost', '/media/reviews/:category/:post');

// Car Finance
// pages
//   .add('carFinance', '/car-finance')
//   .add('carFinance/hirePurchase', '/car-finance/hire-purchase-agreement')
//   .add('carFinance/personalContractPlan', '/car-finance/personal-contract-plan')
//   .add('carFinance/personalLoan', '/car-finance/personal-loan')
//   .add('carFinance/conditionalSale', '/car-finance/conditional-sale')
//   .add('carFinance/fixedSumLoan', '/car-finance/fixed-sum-loan')
//   .add('carFinance/carFinanceCalculator', '/car-finance/car-finance-calculator')
//   .add('carFinance/requestACallBackConfirmation', '/car-finance/request-a-call-back-confirmation')

//   // Car Makes
//   .add('carFinance/carMakes', '/car-finance/car-makes')
//   .add('carFinance/carMakes/carMake', '/car-finance/car-makes/:carMake')

//   // FAQs
//   .add('carFinance/faqs', '/car-finance/faqs')
//   .add('carFinance/faqCategory', '/car-finance/faqs/:category')
//   .add('carFinance/faqPost', '/car-finance/faqs/:category/:post')

//   // Quoting
//   .add('carFinance/yourDetails', '/car-finance/your-details')
//   .add('carFinance/yourAddress', '/car-finance/your-address')
//   .add('carFinance/employmentDetails', '/car-finance/employment-details')
//   .add('carFinance/contactDetails', '/car-finance/contact-details')
//   .add('carFinance/confirmation', '/car-finance/confirmation');

// Car warranties
// pages
//   .add('carWarranties', '/car-warranties')
//   .add('carWarranties/compare', '/car-warranties/compare')
//   .add('carWarranties/fleetWarrantyCover', '/car-warranties/fleet-warranty-cover')
//   .add('carWarranties/carWarrantyGlossary', '/car-warranties/glossary')
//   .add('carWarranties/whatsCovered', '/car-warranties/whats-covered')
//   .add('carWarranties/whyChoose', '/car-warranties/why-choose')
//   .add('carWarranties/warrantyAdditions', '/car-warranties/warranty-additions')
//   .add('carWarranties/levelsOfCover', '/car-warranties/levels-of-cover')

//   // Car Makes
//   .add('carWarranties/carMakes', '/car-warranties/car-makes')
//   .add('carWarranties/carMake/carMake', '/car-warranties/car-makes/car-make')

//   // Quoting
//   .add('carWarranties/vehicleDetails', '/car-warranties/vehicle-details')
//   .add('carWarranties/yourDetails', '/car-warranties/your-details')
//   .add('carWarranties/yourQuote', '/car-warranties/your-quote')
//   .add('carWarranties/warrantyDetails', '/car-warranties/warranty-details')
//   .add('carWarranties/payment', '/car-warranties/payment')
//   .add('carWarranties/confirmation', '/car-warranties/confirmation')

//   // FAQs
//   .add('carWarranties/faqs', '/car-warranties/faqs')
//   .add('carWarranties/faqCategory', '/car-warranties/faqs/:category')
//   .add('carWarranties/faqPost', '/car-warranties/faqs/:category/:post');

// Social Value
pages
  .add('socialValue', '/social-value')
  .add('socialValue/foodReDistribution', '/social-value/food-re-distribution')
  .add('socialValue/hmpAcademies', '/social-value/hmp-academies')
  .add('socialValue/residentialProgramme', '/social-value/residential-programme');

// Contact
pages.add('contact', '/contact');

// Terms & Conditions
pages
  .add('terms', '/terms')
  .add('terms/website', '/terms/website')
  .add('terms/customer', '/terms/customer')
  .add('terms/partner', '/terms/partner')
  .add('terms/business', '/terms/partner/business');

// Cookie Policy
pages.add('policy/cookiePolicy', '/cookie-policy');

// Privacy Policy
pages.add('policy/privacyPolicy', '/privacy-policy');

// Gratitude
pages.add('gratitude', '/contact/thank-you');

module.exports = pages;
