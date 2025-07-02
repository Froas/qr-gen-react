import { useState, useEffect } from 'react'
import type  { ContactInfo, EmailInfo, SMSInfo, CallInfo, WiFiInfo } from '../types'
import { 
  formatUrl, 
  generateVCard, 
  generateCallData, 
  generateEmailData, 
  generateSMSInfo, 
  generateWiFiData 
} from '../utils/dataFormatters'

export const useQRData = (
  activeTab: string,
  urlInput: string,
  textInput: string,
  contactInfo: ContactInfo,
  emailInfo: EmailInfo,
  smsInfo: SMSInfo,
  callInfo: CallInfo,
  wifiInfo: WiFiInfo
) => {
  const [qrData, setQrData] = useState('')

  useEffect(() => {
    let data = ''
    
    switch (activeTab) {
      case 'url':
        data = formatUrl(urlInput)
        break
      case 'text':
        data = textInput
        break
      case 'contact':
        if (contactInfo.firstName || contactInfo.lastName || contactInfo.phone || contactInfo.email) {
          data = generateVCard(contactInfo)
        }
        break
      case 'email':
        if (emailInfo.to) {
          data = generateEmailData(emailInfo)
        }
        break
      case 'sms':
        if (smsInfo.phoneNumber) {
          data = generateSMSInfo(smsInfo)
        }
        break
      case 'call':
        if (callInfo.phoneNumber) {
          data = generateCallData(callInfo)
        }
        break
      case 'wifi':
        if (wifiInfo.ssid) {
          data = generateWiFiData(wifiInfo)
        }
        break
      default:
        data = ''
    }
    
    setQrData(data)
  }, [activeTab, urlInput, textInput, contactInfo, smsInfo, callInfo, emailInfo, wifiInfo])

  return qrData
}