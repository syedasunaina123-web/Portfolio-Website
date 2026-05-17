// EmailJS configuration
// Keys are loaded from .env (VITE_ prefix exposes them to the browser via Vite)
export const EMAILJS_SERVICE_ID  = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID  as string;
export const EMAILJS_TEMPLATE_ID = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID as string;
export const EMAILJS_PUBLIC_KEY  = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY  as string;
