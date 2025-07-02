import { useState, useEffect } from 'react';
import type  { ContactInfo } from '../utils/types';
import { formatUrl, generateVCard } from '../utils/dataFormatters';

export const useQRData = (
  activeTab: string,
  urlInput: string,
  textInput: string,
  contactInfo: ContactInfo
) => {
  const [qrData, setQrData] = useState('');

  useEffect(() => {
    let data = '';
    
    switch (activeTab) {
      case 'url':
        data = formatUrl(urlInput);
        break;
      case 'text':
        data = textInput;
        break;
      case 'contact':
        if (contactInfo.firstName || contactInfo.lastName || contactInfo.phone || contactInfo.email) {
          data = generateVCard(contactInfo);
        }
        break;
      default:
        data = '';
    }
    
    setQrData(data);
  }, [activeTab, urlInput, textInput, contactInfo]);

  return qrData;
};