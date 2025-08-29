import Script from "next/script";
import React from "react";

function GTM() {
	return (
		<>
			<Script
				id="consent-default"
				strategy="beforeInteractive"
				dangerouslySetInnerHTML={{
					__html: `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
// Default consent: no ads, analytics allowed (adjust if you add a banner)
gtag('consent', 'default', {
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'ad_storage': 'denied',
  'analytics_storage': 'granted',
  'wait_for_update': 500
});
    `,
				}}
			/>
			<Script
				id="gtm-init"
				strategy="lazyOnload"
				dangerouslySetInnerHTML={{
					__html: `
setTimeout(function(){
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'? '&l='+l : '';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
}, 5000);
       `,
				}}
			/>
		</>
	);
}

export default GTM;
