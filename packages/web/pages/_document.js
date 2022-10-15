import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w, d, s, l, i) {w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js',});var f = d.getElementsByTagName(s)[0],j = d.createElement(s),dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);})(window, document, 'script', 'dataLayer', 'GTM-5L32C36')`,
            }}
          />
          {/* End Google Tag Manager */}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              title="googleapis"
              dangerouslySetInnerHTML={{
                __html: `src="https://www.googletagmanager.com/ns.html?id=GTM-5L32C36" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}`,
              }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
