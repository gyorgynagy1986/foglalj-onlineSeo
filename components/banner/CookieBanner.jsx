"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCookie, deleteCookie, getAllCookies } from "../../lib/ga-helper";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsentState, , isLoaded] = useCookie("cookie_consent", null);
  
  const [localConsent, setLocalConsent] = useState({
    analytics_storage: null,
    ad_storage: null,
    ad_user_data: null,
    ad_personalization: null,
    functionality_storage: true, // Always true for essential cookies
    personalization_storage: null,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showCustomSettings, setShowCustomSettings] = useState(false); // Új state a testreszabás megjelenítéséhez

  // Initialize banner visibility and consent state
  useEffect(() => {
    if (isLoaded) {
      if (cookieConsent) {
        setLocalConsent(cookieConsent);
        setIsVisible(false);
        setShowFloatingButton(true);
      } else {
        setIsVisible(true);
        setShowFloatingButton(false);
      }
    }
  }, [cookieConsent, isLoaded]);

  // Function to delete cookies across all possible domains
  const deleteCookieAllDomains = (cookieName) => {
    const hostname = window.location.hostname;
    const domains = [
      undefined, // default domain
      hostname,
      `.${hostname}`,
      hostname.replace(/^www\./, ''),
      `.${hostname.replace(/^www\./, '')}`,
    ];
    
    domains.forEach(domain => {
      deleteCookie(cookieName, { domain, path: '/' });
      deleteCookie(cookieName, { domain, path: window.location.pathname });
    });
  };

  // Function to save consent and update gtag
  const saveConsentAndUpdate = (consentToSave) => {
    // Ensure functionality_storage is always true
    const finalConsent = {
      ...consentToSave,
      functionality_storage: true
    };

    // Delete cookies for categories that are now denied
    deleteRevokedCookies(finalConsent);

    // Save to cookie using the helper - FONTOS: ezt ELŐBB csináljuk
    setCookieConsentState(finalConsent, {
      expires: 365, // 1 year
      sameSite: "Strict",
      secure: process.env.NODE_ENV === 'production'
    });

    // Update local state
    setLocalConsent(finalConsent);

    // Update gtag consent
    const consentStatus = {};
    for (const [key, value] of Object.entries(finalConsent)) {
      if (value !== null) {
        consentStatus[key] = value ? "granted" : "denied";
      }
    }

    // Update consent immediately
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag("consent", "update", consentStatus);
        console.log("✅ Consent Mode v2 Updated:", consentStatus);
        
        // Force a pageview with new consent
        window.gtag('event', 'page_view', {
          'send_to': 'G-DEXBXRS1V7',
          'consent_update': true
        });
      } catch (error) {
        console.error("Consent update failed:", error);
      }
    }
  };

  // Function to delete cookies for revoked categories
  const deleteRevokedCookies = (newConsent) => {
    // Define which cookies belong to which categories
    const cookieCategories = {
      analytics_storage: ['_ga', '_ga_*', '_gid', '_gat', '_gat_*', '_gtag', 'gtag'],
      ad_storage: ['_gcl_*', '_gac_*', 'IDE', 'test_cookie', '__gads', '__gpi', '__gpi_*'],
      ad_user_data: ['_gcl_*', '_gac_*'],
      ad_personalization: ['IDE', 'test_cookie', '__gads'],
      personalization_storage: ['_pref_*', 'lang', 'theme']
    };

    // Get all current cookies
    const allCookies = getAllCookies();

    // Check each category
    for (const [category, isAllowed] of Object.entries(newConsent)) {
      if (!isAllowed && cookieCategories[category]) {
        const cookiesToDelete = cookieCategories[category];
        
        cookiesToDelete.forEach(cookiePattern => {
          if (cookiePattern.includes('*')) {
            // Handle wildcard patterns - only replace last asterisk
            const prefix = cookiePattern.replace(/\*$/, '');
            Object.keys(allCookies).forEach(cookieName => {
              if (cookieName.startsWith(prefix)) {
                console.log(`🗑️ Deleting cookie: ${cookieName} (category: ${category})`);
                deleteCookieAllDomains(cookieName);
              }
            });
          } else {
            // Exact cookie name
            if (allCookies[cookiePattern]) {
              console.log(`🗑️ Deleting cookie: ${cookiePattern} (category: ${category})`);
              deleteCookieAllDomains(cookiePattern);
            }
          }
        });
      }
    }
  };

  const handleConsentToggle = (type) => {
    // Don't allow toggling functionality_storage
    if (type === 'functionality_storage') return;
    
    setLocalConsent((prevConsent) => ({
      ...prevConsent,
      [type]: !prevConsent[type],
    }));
  };

  const acceptAll = () => {
    const allAcceptedConsent = {
      analytics_storage: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
      functionality_storage: true,
      personalization_storage: true,
    };

    saveConsentAndUpdate(allAcceptedConsent);
    setIsVisible(false);
    setShowFloatingButton(true);
  };

  const acceptNecessary = () => {
    const necessaryOnlyConsent = {
      analytics_storage: false,
      ad_storage: false,
      ad_user_data: false,
      ad_personalization: false,
      functionality_storage: true,
      personalization_storage: false,
    };

    saveConsentAndUpdate(necessaryOnlyConsent);
    setIsVisible(false);
    setShowFloatingButton(true);
  };

  const acceptSelected = () => {
    // Convert null values to false, keep true values as true
    const selectedConsent = {};
    for (const [key, value] of Object.entries(localConsent)) {
      selectedConsent[key] = value === true ? true : false;
    }

    saveConsentAndUpdate(selectedConsent);
    setIsVisible(false);
    setShowFloatingButton(true);
  };

  // Function to close banner without saving (keeps current consent or defaults to necessary)
  const closeBanner = () => {
    // If no previous consent exists, save necessary only
    if (!cookieConsent) {
      acceptNecessary();
    } else {
      // Just close the banner, keep existing consent
      setIsVisible(false);
      setShowFloatingButton(true);
    }
  };

  // Function to reopen banner for modifications
  const reopenBanner = () => {
    console.log("🍪 Reopening banner");
    setIsVisible(true);
    setShowFloatingButton(false);
    setShowCustomSettings(false); // Reset custom settings when reopening
  };

  // Toggle custom settings visibility
  const toggleCustomSettings = () => {
    setShowCustomSettings(!showCustomSettings);
  };

  const consentTypes = [
    {
      key: "functionality_storage",
      label: "Funkcionális tárolás",
      description: "A weboldal megfelelő működéséhez szükséges",
      required: true,
    },
    {
      key: "analytics_storage",
      label: "Analitikai tárolás",
      description: "Weboldal forgalom és használati statisztikák",
      required: false,
    },
    {
      key: "personalization_storage",
      label: "Személyre szabási tárolás",
      description: "Felhasználói preferenciák mentése",
      required: false,
    },
    {
      key: "ad_storage",
      label: "Hirdetési tárolás",
      description: "Hirdetések személyre szabása és mérése",
      required: false,
    },
    {
      key: "ad_user_data",
      label: "Hirdetési felhasználói adatok",
      description: "Felhasználói adatok hirdetési célokra",
      required: false,
    },
    {
      key: "ad_personalization",
      label: "Hirdetés személyre szabás",
      description: "Személyre szabott hirdetések megjelenítése",
      required: false,
    },
  ];

  // Don't render anything until loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {/* Cookie Banner */}
      {isVisible && (
        <div className={styles.cookieBanner}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h3 className={styles.title}>Cookie Beállítások</h3>
              {/* Close Button */}
              <button
                onClick={closeBanner}
                className={styles.closeButton}
                aria-label="Bezárás"
                title="Bezárás"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.description}>
              <p>
                Weboldalunk sütiket (cookie-kat) használ a legjobb felhasználói
                élmény biztosítása érdekében. Kiválaszthatja, mely típusú
                sütiket engedélyezi.{" "}
                <Link
                  href="/adatkezeles/#sutik"
                  className={styles.privacyLink}
                >
                  További információ
                </Link>
              </p>
            </div>

            {/* Részletes beállítások - csak akkor látható, ha showCustomSettings true */}
            {showCustomSettings && (
              <div className={styles.consentGrid}>
                {consentTypes.map((type) => (
                  <div key={type.key} className={styles.consentCard}>
                    <div className={styles.cardContent}>
                      <div className={styles.switchContainer}>
                        <label className={styles.switch}>
                          <input
                            className={styles.switchInput}
                            type="checkbox"
                            checked={localConsent[type.key] === true}
                            onChange={() => handleConsentToggle(type.key)}
                            disabled={type.required}
                            aria-label={`${type.label} ${type.required ? '(kötelező)' : ''}`}
                          />
                          <span className={styles.switchSlider}></span>
                        </label>
                      </div>
                      <div className={styles.cardText}>
                        <h6 className={styles.cardTitle}>
                          {type.label}
                          {type.required && (
                            <span className={styles.requiredBadge}>Kötelező</span>
                          )}
                        </h6>
                        <p className={styles.cardDescription}>
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.buttonContainer}>
              <button
                onClick={acceptNecessary}
                className={`${styles.button} ${styles.buttonSecondary}`}
                type="button"
              >
                Csak szükséges
              </button>
              
              {/* Testreszabás gomb - csak akkor mutatja az "Elfogadás" gombot, ha a beállítások láthatóak */}
              {!showCustomSettings ? (
                <button
                  onClick={toggleCustomSettings}
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  type="button"
                >
                  Testreszabás
                </button>
              ) : (
                <button
                  onClick={acceptSelected}
                  className={`${styles.button} ${styles.buttonPrimary} ${styles.solid}`}
                  type="button"
                >
                  Kiválasztottak elfogadása
                </button>
              )}
              
              <button
                onClick={acceptAll}
                className={`${styles.button} ${styles.buttonSuccess}`}
                type="button"
              >
                Összes elfogadása
              </button>
            </div>

            <div className={styles.footer}>
              <div className={styles.footerInfo}>
                <div className={styles.poweredBy}>
                  <span className={styles.poweredByText}>Powered by</span>
                  <a
                    href="https://studiobromo.hu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.studioLink}
                  >
                    <strong>Studio Bromo</strong>
                  </a>
                </div>
                <div className={styles.compliance}>
                  <span className={styles.complianceText}>
                    🛡️ GDPR & DMA Compliant
                  </span>
                  <span className={styles.versionBadge}>
                    Google Consent Mode v2 Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Cookie Settings Button */}
      {showFloatingButton && (
        <button
          onClick={reopenBanner}
          className={styles.floatingButton}
          aria-label="Cookie beállítások megnyitása"
          title="Cookie beállítások"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C17.5228 2 22 6.47715 22 12C22 12.7298 21.9188 13.4402 21.7651 14.1217C21.572 14.0427 21.3712 13.9808 21.165 13.9371C20.4705 13.7869 19.7379 13.8816 19.1046 14.2049C18.4713 14.5281 17.9755 15.0589 17.6979 15.7083C17.4203 16.3576 17.3775 17.0855 17.5766 17.7629C17.7757 18.4403 18.2049 19.0256 18.7929 19.4189C18.8674 19.4705 18.9439 19.5185 19.0221 19.5627C17.6553 21.0707 15.8168 22.0544 13.7732 22.3559C11.7296 22.6574 9.59406 22.2534 7.77213 21.2127C5.9502 20.172 4.54687 18.5562 3.78076 16.6254C3.01464 14.6947 2.93095 12.5592 3.54206 10.5734C4.15317 8.58755 5.42364 6.86493 7.15163 5.6773C8.87961 4.48967 10.9656 3.90457 13.0605 4.01C13.1858 4.01733 13.3114 4.02064 13.437 4.01994C13.1519 4.65449 13.0966 5.37004 13.2807 6.04075C13.4648 6.71146 13.8771 7.29509 14.4482 7.69401C15.0194 8.09293 15.7146 8.28215 16.4168 8.22728C17.119 8.17241 17.7859 7.87673 18.3035 7.38965C18.821 6.90258 19.1588 6.25247 19.261 5.5422C19.3632 4.83192 19.2232 4.10392 18.8632 3.48079C18.5032 2.85766 17.9435 2.37544 17.2729 2.11171C16.6024 1.84798 15.8598 1.81794 15.1711 2.02689C14.1399 2.18753 13.0769 2.12674 12.0589 1.84863C12.0393 1.84863 12.0197 1.84929 12 1.84993V2ZM12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8ZM7.5 12C7.22386 12 7 12.2239 7 12.5C7 12.7761 7.22386 13 7.5 13C7.77614 13 8 12.7761 8 12.5C8 12.2239 7.77614 12 7.5 12ZM16.5 12C16.2239 12 16 12.2239 16 12.5C16 12.7761 16.2239 13 16.5 13C16.7761 13 17 12.7761 17 12.5C17 12.2239 16.7761 12 16.5 12ZM10.5 15C10.2239 15 10 15.2239 10 15.5C10 15.7761 10.2239 16 10.5 16C10.7761 16 11 15.7761 11 15.5C11 15.2239 10.7761 15 10.5 15ZM12.5 16C12.2239 16 12 16.2239 12 16.5C12 16.7761 12.2239 17 12.5 17C12.7761 17 13 16.7761 13 16.5C13 12.2239 12.7761 16 12.5 16ZM9 17C8.72386 17 8.5 17.2239 8.5 17.5C8.5 17.7761 8.72386 18 9 18C9.27614 18 9.5 17.7761 9.5 17.5C9.5 17.2239 9.27614 17 9 17ZM15 17C14.7239 17 14.5 17.2239 14.5 17.5C14.5 17.7761 14.7239 18 15 18C15.2761 18 15.5 17.7761 15.5 17.5C15.5 17.2239 15.2761 17 15 17Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
    </>
  );
}