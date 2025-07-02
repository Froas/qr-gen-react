export interface ContactInfo {
  firstName: string
  lastName: string
  phone: string
  email: string
  organization: string
  url: string
}

export interface Tab {
  id: string
  label: string
  icon: any
}

export interface EmailInfo {
  to: string
  subject: string
  body: string
}

export interface CallInfo {
  phoneNumber: string
}

export interface SMSInfo {
  phoneNumber: string
  message: string
}

export interface WiFiInfo {
  ssid: string
  password: string
  security: 'WPA' | 'WEP' | 'nopass'
  hidden: boolean
}
