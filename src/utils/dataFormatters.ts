import { body } from "framer-motion/client";
import type  { ContactInfo, EmailInfo, CallInfo, SMSInfo, WiFiInfo  } from "../types";

export const formatUrl = (url: string): string => {
  if (!url.trim()) return '';
  
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return 'https://' + url;
  }
  return url;
};

export const generateVCard = (contact: ContactInfo): string => {
  return `BEGIN:VCARD
VERSION:3.0
FN:${contact.firstName} ${contact.lastName}
N:${contact.lastName};${contact.firstName};;;
ORG:${contact.organization}
TEL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.url}
END:VCARD`;
};

export const generateEmailData = (email: EmailInfo): string => {
  const params = new URLSearchParams();
  if (email.subject) params.append('subject', email.subject);
  if (email.body) params.append('body', email.body);
  
  const queryString = params.toString();
  return `mailto:${email.to}${queryString ? '?' + queryString : ''}`;
};

export const generateCallData = (call: CallInfo): string => {
  return `tel:${call.phoneNumber}`
}

export const generateSMSInfo = (sms: SMSInfo): string => {
  const encodedMessage = encodeURIComponent(sms.message)
  return `sms:${sms.phoneNumber}${sms.message ? '?body=' + encodedMessage : ''}`
}

export const generateWiFiData = (wifi: WiFiInfo): string => {
  const security = wifi.security === 'nopass' ? 'noopass' : wifi.security
  const hidden = wifi.hidden ? 'true' : 'false'
  return `WIFI:T:${security};S:${wifi.ssid};P:${wifi.password};H:${hidden}`
}