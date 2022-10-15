const QUOTE_STATUS = {
  DRAFT: 'draft',
  CREATED: 'created',
  ARRANGE: 'arrange',
  PENDING_PAYMENT: 'pending_payment',
  CONFIRMED: 'confirmed',
  EXPIRED: 'expired',
  PAID: 'paid',
  COLLECTION: 'collection',
  DELETED: 'deleted',
  COMPLETED: 'completed',
  UNAUTHORIZED: '401',
  FORBIDDEN: '403',
};

const QUOTE_ROUTES = {
  ENTER_DETAILS: '/scrap-my-car/enter-details',
  ONLINE_QUOTATION: '/scrap-my-car/online-quote',
  ARRANGE_COLLECTION: '/scrap-my-car/arrange-a-collection',
  PAYMENT_METHOD: '/scrap-my-car/payment-method',
  CONFIRMATION: '/scrap-my-car/confirmation',
  HOMEPAGE: '/scrap-my-car',
  CUSTOMER_PORTAL_QUOTE_HISTORY: '/my-account/scrap-my-car/quote-history',
  CUSTOMER_PORTAL_SCRAPPED_CARS: '/my-account/scrap-my-car/scrapped-cars',
  LOGIN: '/sign-in',
};

// Use construction of module.exports is required
// because of the absence of server support for export keyword
module.exports = {
  QUOTE_STATUS,
  QUOTE_ROUTES,
};
