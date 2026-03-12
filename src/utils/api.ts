const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://musdev-strappi-backend-1.onrender.com";
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN || "e609a346fc754638bc09561a576f8b548076d10a74b23972bf9d06f82fe87b5cb9fac5f67edbdd975d071b5474cb51765a74c25b8613c31cd01b0900f1813e2edf0451f8ea465a397d40c21e0bb7ce51ed682fa531487eb280b45920daa414614e3e097ccb9c92d640895a636660b0496d264234dac3da6600f9e628f3cf0027";

/**
 * Automatically flattens Strapi's nested 'attributes' and 'data' structure
 */
const flattenAttributes = (data: any): any => {
  if (!data) return null;

  // Handle Arrays (Collection Types)
  if (Array.isArray(data)) {
    return data.map(flattenAttributes);
  }

  let flattened: any = {};

  // Merge attributes if they exist
  if (data.attributes) {
    flattened = { ...flattenAttributes(data.attributes) };
  } else {
    flattened = { ...data };
  }

  // ID preservation
  if (data.id) flattened.id = data.id;

  // Recurse through nested objects (Media, Components, Relations)
  for (const key in flattened) {
    if (flattened[key] && typeof flattened[key] === 'object') {
      flattened[key] = flattenAttributes(flattened[key]);
    }
  }

  return flattened;
};

/**
 * Enhanced Fetcher: Dynamic Path + Auto-Flattening + Auth
 */
export const getStrapiData = async (path: string) => {
  try {
    // Append populate=* automatically to catch all images/components
    const url = `${STRAPI_URL}/api/${path}${path.includes('?') ? '&' : '?'}populate=*`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // ISR Revalidation for Next.js
    });

    if (!response.ok) {
      throw new Error(`Strapi Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    // Returns clean data without the .data.attributes nesting
    return flattenAttributes(result.data);
    
  } catch (error) {
    console.error(`Failed to fetch from Strapi [${path}]:`, error);
    return null;
  }
};

/**
 * Dynamic URL helper for Images
 */
export const getFileUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const baseUrl = STRAPI_URL.endsWith('/') ? STRAPI_URL.slice(0, -1) : STRAPI_URL;
  return `${baseUrl}${path}`;
};

/**
 * POSTer for Forms (Innovate/Membership)
 */
export const postStrapiData = async (path: string, payload: any) => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/${path}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: payload }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `Strapi Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to post to Strapi [${path}]:`, error);
    throw error;
  }
};