"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCookie, deleteCookie, getAllCookies } from "../../lib/ga-helper";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsentState, , isLoaded] = useCookie(
    "cookie_consent",
    null,
  );
  const [localConsent, setLocalConsent] = useState({
    analytics_storage: null,
    ad_storage: null,
    ad_user_data: null,
    ad_personalization: null,
    functionality_storage: true,
    personalization_storage: null,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showCustomSettings, setShowCustomSettings] = useState(false);

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

  const deleteCookieAllDomains = (cookieName) => {
    const hostname = window.location.hostname;
    const domains = [
      undefined,
      hostname,
      `.${hostname}`,
      hostname.replace(/^www\./, ""),
      `.${hostname.replace(/^www\./, "")}`,
    ];
    domains.forEach((domain) => {
      deleteCookie(cookieName, { domain, path: "/" });
      deleteCookie(cookieName, { domain, path: window.location.pathname });
    });
  };

  const saveConsentAndUpdate = (consentToSave) => {
    const finalConsent = { ...consentToSave, functionality_storage: true };
    deleteRevokedCookies(finalConsent);

    setCookieConsentState(finalConsent, {
      expires: 365,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    });

    setLocalConsent(finalConsent);

    const consentStatus = {};
    for (const [key, value] of Object.entries(finalConsent)) {
      if (value !== null) {
        consentStatus[key] = value ? "granted" : "denied";
      }
    }

    if (typeof window !== "undefined" && window.gtag) {
      try {
        window.gtag("consent", "update", consentStatus);
        console.log("✅ Consent Mode v2 Updated:", consentStatus);
        window.gtag("event", "page_view", {
          send_to: "G-4PGRRY8H9Y",
          consent_update: true,
        });
      } catch (error) {
        console.error("Consent update failed:", error);
      }
    }
  };

  const deleteRevokedCookies = (newConsent) => {
    const cookieCategories = {
      analytics_storage: [
        "_ga",
        "_ga_*",
        "_gid",
        "_gat",
        "_gat_*",
        "_gtag",
        "gtag",
      ],
      ad_storage: [
        "_gcl_*",
        "_gac_*",
        "IDE",
        "test_cookie",
        "__gads",
        "__gpi",
        "__gpi_*",
      ],
      ad_user_data: ["_gcl_*", "_gac_*"],
      ad_personalization: ["IDE", "test_cookie", "__gads"],
      personalization_storage: ["_pref_*", "lang", "theme"],
    };

    const allCookies = getAllCookies();

    for (const [category, isAllowed] of Object.entries(newConsent)) {
      if (!isAllowed && cookieCategories[category]) {
        const cookiesToDelete = cookieCategories[category];
        cookiesToDelete.forEach((cookiePattern) => {
          if (cookiePattern.includes("*")) {
            const prefix = cookiePattern.replace(/\*$/, "");
            Object.keys(allCookies).forEach((cookieName) => {
              if (cookieName.startsWith(prefix)) {
                console.log(
                  `🗑️ Deleting cookie: ${cookieName} (category: ${category})`,
                );
                deleteCookieAllDomains(cookieName);
              }
            });
          } else {
            if (allCookies[cookiePattern]) {
              console.log(
                `🗑️ Deleting cookie: ${cookiePattern} (category: ${category})`,
              );
              deleteCookieAllDomains(cookiePattern);
            }
          }
        });
      }
    }
  };

  const handleConsentToggle = (type) => {
    if (type === "functionality_storage") return;
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
    setShowCustomSettings(false);
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
    setShowCustomSettings(false);
  };

  const acceptSelected = () => {
    const selectedConsent = {};
    for (const [key, value] of Object.entries(localConsent)) {
      selectedConsent[key] = value === true ? true : false;
    }
    saveConsentAndUpdate(selectedConsent);
    setIsVisible(false);
    setShowFloatingButton(true);
    setShowCustomSettings(false);
  };

  const closeBanner = () => {
    if (!cookieConsent) {
      acceptNecessary();
    } else {
      setIsVisible(false);
      setShowFloatingButton(true);
    }
  };

  const reopenBanner = () => {
    console.log("🍪 Reopening banner");
    setIsVisible(true);
    setShowFloatingButton(false);
    setShowCustomSettings(false);
  };

  const toggleCustomSettings = () => {
    setShowCustomSettings(!showCustomSettings);
  };

  const consentTypes = [
    {
      key: "functionality_storage",
      label: "Funkcionális",
      description: "A weboldal megfelelő működéséhez szükséges",
      required: true,
    },
    {
      key: "analytics_storage",
      label: "Analitika",
      description: "Weboldal forgalom és használati statisztikák",
      required: false,
    },
    {
      key: "personalization_storage",
      label: "Személyre szabás",
      description: "Felhasználói preferenciák mentése",
      required: false,
    },
    {
      key: "ad_storage",
      label: "Hirdetések",
      description: "Hirdetések személyre szabása és mérése",
      required: false,
    },
    {
      key: "ad_user_data",
      label: "Hirdetési adatok",
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

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {/* Compact Cookie Banner */}
      {isVisible && (
        <div className={styles.cookieBannerCompact}>
          <div className={styles.compactContent}>
            <div className={styles.compactLeft}>
              <span className={styles.cookieIcon}>🍪</span>
              <div className={styles.compactText}>
                <strong>Cookie-k használata</strong>
                <span className={styles.compactDescription}>
                  Sütiket használunk a legjobb élmény biztosításához.{" "}
                  <Link href="/adatkezeles" className={styles.inlineLink}>
                    Adatkezelés
                  </Link>
                </span>
              </div>
            </div>

            <div className={styles.compactButtons}>
              <button
                onClick={toggleCustomSettings}
                className={styles.btnSettings}
                aria-label="Beállítások"
              >
                ⚙️
              </button>
              <button onClick={acceptNecessary} className={styles.btnNecessary}>
                Csak szükséges
              </button>
              <button onClick={acceptAll} className={styles.btnAcceptAll}>
                Összes elfogadása
              </button>
            </div>
          </div>

          {/* Dropdown Settings */}
          {/* Dropdown Settings */}
          {showCustomSettings && (
            <div className={styles.compactDropdown}>
              <div className={styles.dropdownGrid}>
                {consentTypes.map((type) => (
                  <label
                    key={type.key}
                    className={`${styles.dropdownItem} ${type.required ? styles.required : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={localConsent[type.key] === true}
                      onChange={() => handleConsentToggle(type.key)}
                      disabled={type.required}
                    />
                    <div className={styles.dropdownLabel}>
                      <strong>{type.label}</strong>
                      {type.required && (
                        <span className={styles.badge}>Kötelező</span>
                      )}
                      <small>{type.description}</small>
                    </div>
                  </label>
                ))}
              </div>
              <div className={styles.dropdownActions}>
                <button
                  onClick={acceptSelected}
                  className={styles.btnSaveSelected}
                >
                  Kiválasztottak mentése
                </button>
              </div>

              {/* Footer Info */}
              <div className={styles.dropdownFooter}>
                <div className={styles.footerBranding}>
                  <Link href="https://www.studiobromo.hu/">
                    {" "}
                    Powered by <strong>Studio Bromo</strong>
                  </Link>
                </div>
                <div className={styles.footerCompliance}>
                  <span className={styles.complianceBadge}>
                    🛡️ GDPR & DMA Compliant
                  </span>
                  <span className={styles.complianceBadge}>
                    Google Consent Mode v2 Ready
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Cookie Settings Button */}
      {showFloatingButton && (
        <button
          onClick={reopenBanner}
          className={styles.floatingCookieButton}
          aria-label="Cookie beállítások"
          title="Cookie beállítások"
        >
          🍪
        </button>
      )}
    </>
  );
}
