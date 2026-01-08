/**
 * Cookie Helper Functions for Next.js 15
 * Safe client-side cookie management without localStorage dependency
 */

/**
 * Set a cookie value
 * @param {string} name - Cookie name
 * @param {string} value - Cookie value
 * @param {Object} options - Cookie options
 */
export function setCookie(name, value, options = {}) {
  if (typeof document === 'undefined') {
    console.warn('setCookie called on server-side, skipping...');
    return;
  }

  const defaults = {
    path: '/',
    expires: 365, // days
    sameSite: 'Strict',
    secure: process.env.NODE_ENV === 'production'
  };

  const settings = { ...defaults, ...options };
  
  // Serialize objects to JSON string
  const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;
  
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(serializedValue)}`;
  
  if (settings.expires) {
    const date = new Date();
    date.setTime(date.getTime() + (settings.expires * 24 * 60 * 60 * 1000));
    cookieString += `; expires=${date.toUTCString()}`;
  }
  
  if (settings.path) {
    cookieString += `; path=${settings.path}`;
  }
  
  if (settings.domain) {
    cookieString += `; domain=${settings.domain}`;
  }
  
  if (settings.secure) {
    cookieString += `; secure`;
  }
  
  if (settings.sameSite) {
    cookieString += `; samesite=${settings.sameSite}`;
  }

  document.cookie = cookieString;
}

/**
 * Get a cookie value
 * @param {string} name - Cookie name
 * @param {*} defaultValue - Default value if cookie not found
 * @returns {*} Cookie value or default value
 */
export function getCookie(name, defaultValue = null) {
  if (typeof document === 'undefined') {
    return defaultValue;
  }

  try {
    const cookieMatch = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${encodeURIComponent(name)}=`));
    
    if (!cookieMatch) {
      return defaultValue;
    }

    const parts = cookieMatch.split('=');
    if (parts.length < 2) {
      return defaultValue;
    }

    // Join back if there are = signs in the value
    const value = decodeURIComponent(parts.slice(1).join('='));
    
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  } catch (error) {
    console.error('Error reading cookie:', error);
    return defaultValue;
  }
}

/**
 * Delete a cookie
 * @param {string} name - Cookie name
 * @param {Object} options - Cookie options (path, domain)
 */
export function deleteCookie(name, options = {}) {
  if (typeof document === 'undefined') {
    console.warn('deleteCookie called on server-side, skipping...');
    return;
  }

  const deleteOptions = {
    ...options,
    expires: -1 // Set expiry to past date
  };
  
  setCookie(name, '', deleteOptions);
}

/**
 * Check if cookies are enabled
 * @returns {boolean} True if cookies are enabled
 */
export function areCookiesEnabled() {
  if (typeof document === 'undefined') {
    return false;
  }

  try {
    const testCookie = '__cookie_test__';
    setCookie(testCookie, 'test');
    const enabled = getCookie(testCookie) === 'test';
    deleteCookie(testCookie);
    return enabled;
  } catch (error) {
    return false;
  }
}

/**
 * Get all cookies as an object
 * @returns {Object} All cookies as key-value pairs
 */
export function getAllCookies() {
  if (typeof document === 'undefined') {
    return {};
  }

  const cookies = {};
  
  document.cookie.split(';').forEach(cookie => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    if (name && value) {
      try {
        cookies[decodeURIComponent(name)] = JSON.parse(decodeURIComponent(value));
      } catch (error) {
        cookies[decodeURIComponent(name)] = decodeURIComponent(value);
      }
    }
  });

  return cookies;
}

/**
 * Server-side cookie helper for Next.js API routes and middleware
 * Use this in getServerSideProps, API routes, or middleware
 */
export class ServerCookies {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  get(name, defaultValue = null) {
    if (!this.req?.cookies) {
      return defaultValue;
    }
    
    const value = this.req.cookies[name];
    if (!value) {
      return defaultValue;
    }

    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }

  set(name, value, options = {}) {
    if (!this.res) {
      console.warn('ServerCookies.set: No response object available');
      return;
    }

    const defaults = {
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 365 // 1 year in seconds
    };

    const settings = { ...defaults, ...options };
    
    // Serialize the value
    const serializedValue = typeof value === 'object' 
      ? JSON.stringify(value) 
      : String(value);

    // Set cookie header
    const cookieHeader = this.serialize(name, serializedValue, settings);
    
    // Append to existing cookies if any
    const existingCookies = this.res.getHeader('Set-Cookie') || [];
    const cookies = Array.isArray(existingCookies) 
      ? [...existingCookies, cookieHeader]
      : [existingCookies, cookieHeader];
      
    this.res.setHeader('Set-Cookie', cookies);
  }

  delete(name, options = {}) {
    this.set(name, '', { ...options, maxAge: -1 });
  }

  serialize(name, value, options) {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    
    if (options.maxAge) {
      cookie += `; Max-Age=${options.maxAge}`;
    }
    
    if (options.path) {
      cookie += `; Path=${options.path}`;
    }
    
    if (options.domain) {
      cookie += `; Domain=${options.domain}`;
    }
    
    if (options.secure) {
      cookie += '; Secure';
    }
    
    if (options.httpOnly) {
      cookie += '; HttpOnly';
    }
    
    if (options.sameSite) {
      cookie += `; SameSite=${options.sameSite}`;
    }

    return cookie;
  }
}

/**
 * Hook for using cookies in React components
 * Compatible with Next.js 15 App Router
 */
import { useState, useEffect, useCallback } from 'react';

export function useCookie(name, defaultValue = null) {
  const [value, setValue] = useState(defaultValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const cookieValue = getCookie(name, defaultValue);
      setValue(cookieValue);
      setIsLoaded(true);
    }
  }, [name, defaultValue]);

  const updateCookie = useCallback((newValue, options = {}) => {
    setValue(newValue);
    setCookie(name, newValue, options);
  }, [name]);

  const removeCookie = useCallback((options = {}) => {
    setValue(defaultValue);
    deleteCookie(name, options);
  }, [name, defaultValue]);

  return [value, updateCookie, removeCookie, isLoaded];
}