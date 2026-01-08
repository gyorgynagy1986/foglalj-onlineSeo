// app/components/ConsentInitializer.js
"use client";

import Script from 'next/script';

export default function ConsentInitializer() {
  return (
    <Script
      id="consent-initializer"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Helper function to get cookie value
            function getCookie(name) {
              const value = "; " + document.cookie;
              const parts = value.split("; " + name + "=");
              if (parts.length === 2) {
                try {
                  return JSON.parse(decodeURIComponent(parts.pop().split(";").shift()));
                } catch (e) {
                  return null;
                }
              }
              return null;
            }

            // Initialize dataLayer if not exists
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            window.gtag = gtag;

            // ✅ MINDIG denied alapértelmezéssel indulunk!
            gtag("consent", "default", {
              ad_storage: "denied",
              ad_user_data: "denied", 
              ad_personalization: "denied",
              analytics_storage: "denied",
              functionality_storage: "granted", // Ez maradhat granted
              personalization_storage: "denied",
              security_storage: "granted", // Ez is maradhat granted
              wait_for_update: 2000,
              url_passthrough: true,
              ads_data_redaction: true
            });

            console.log("🆕 Set default DENIED consent state");

            // Region specific settings for EU
            gtag("consent", "default", {
              region: ['HU', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'IS', 'LI', 'NO'],
              wait_for_update: 2000
            });

            // ✅ MAJD ellenőrizzük a mentett hozzájárulást
            const savedConsent = getCookie('cookie_consent');
            
            if (savedConsent) {
              // Van mentett hozzájárulás - UPDATE paranccsal frissítjük
              const consentUpdate = {};
              
              for (const [key, value] of Object.entries(savedConsent)) {
                if (value !== null) {
                  consentUpdate[key] = value ? "granted" : "denied";
                }
              }
              
              // ✅ UPDATE parancs a mentett értékekkel
              gtag("consent", "update", consentUpdate);
              
              console.log("🔄 UPDATED consent from saved cookie:", consentUpdate);
            }

            // Enable additional features
            gtag("set", "ads_data_redaction", true);
            gtag("set", "url_passthrough", true);
          })();
        `,
      }}
    />
  );
}