import { useState, useRef } from 'react'
import { Link, MessageSquare, User, Mail, Phone, MessageCircle, Wifi } from 'lucide-react'
import type  { ContactInfo, Tab, SMSInfo, CallInfo, EmailInfo, WiFiInfo } from '../types'
import { TabNavigation } from './TabNavigation'
import { URLInput } from './input/URLInput'
import { TextInput } from './input/TextInput'
import { ContactInput } from './input/ContactInput'
import { QRDisplay } from './QRDisplay'
import { ActionButtons } from './ActionButtons'
import { DataPreview } from './DataPreview'
import { useQRData } from '../hooks/useQRData'
import Particles from './react-bits/Particles'
import DecryptedText from './react-bits/DecryptedText/DecryptedText'
import AnimatedContent from './react-bits/AnimatedContent'
import SplitText from './react-bits/SplitText/SplitText'
import { EmailInput } from './input/EmailInput'
import { CallInput } from './input/CallInput'
import { SMSInput } from './input/SMSInput'
import { WiFiInput } from './input/WiFiInput'

export const QRCodeGenerator = () => {
  const [activeTab, setActiveTab] = useState('url')
  const qrContainerRef = useRef<HTMLDivElement>(null)
  
  // Form states
  const [urlInput, setUrlInput] = useState('')
  const [textInput, setTextInput] = useState('')
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    organization: '',
    url: ''
  })
  const [smsInfo, setSmsInfo] = useState<SMSInfo>({
    phoneNumber: '',
    message: ''
  })
  const [emailInfo, setEmailInfo] = useState<EmailInfo>({
    to: '',
    subject: '',
    body: ''
  })
  const [callInfo, setCallInfo] = useState<CallInfo>({phoneNumber: ''})
  const [wifiInfo, setWifiInfo] = useState<WiFiInfo>({
    ssid: '',
    password: '',
    security: 'nopass',
    hidden: false
  })

  const qrData = useQRData(
    activeTab, 
    urlInput, 
    textInput, 
    contactInfo, 
    emailInfo, 
    smsInfo, 
    callInfo, 
    wifiInfo
  )

  const resetForm = () => {
    setUrlInput('')
    setTextInput('')
    setContactInfo({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      organization: '',
      url: ''
    })
    setEmailInfo({
      to: '',
      subject: '',
      body: ''
    })
    setCallInfo({
      phoneNumber: ''
    })
    setSmsInfo({
      phoneNumber: '',
      message: ''
    })
    setWifiInfo({
      ssid: '',
      password: '',
      security: 'WPA',
      hidden: false
    })
  }

  const tabs: Tab[] = [
    { id: 'url', label: 'URL', icon: Link },
    { id: 'text', label: 'Text', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: User },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'call', label: 'Call', icon: Phone },
    { id: 'sms', label: 'SMS', icon: MessageCircle },
    { id: 'wifi', label: 'WiFi', icon: Wifi },
  ]

  const renderInputSection = () => {
    switch (activeTab) {
      case 'url':
        return <URLInput value={urlInput} onChange={setUrlInput} />
      case 'text':
        return <TextInput value={textInput} onChange={setTextInput} />
      case 'contact':
        return <ContactInput contactInfo={contactInfo} onChange={setContactInfo} />
      case 'email':
        return <EmailInput emailInfo={emailInfo} onChange={setEmailInfo} />
      case 'call':
        return <CallInput callInfo={callInfo} onChange={setCallInfo} />
      case 'sms':
        return <SMSInput smsInfo={smsInfo} onChange={setSmsInfo} />
      case 'wifi':
        return <WiFiInput wifiInfo={wifiInfo} onChange={setWifiInfo} />
      
      default:
        return null
    }
  }

  const getSectionTitle = () => {
    switch (activeTab) {
      case 'url': return 'Enter URL'
      case 'text': return 'Enter Text'
      case 'contact': return 'Contact Information'
      case 'email': return 'Email Details'
      case 'call': return 'Phone number'
      case 'sms': return 'SMS Details'
      case 'wifi': return 'WiFi Network'
      default: return ''
    }
  }

  return (
    <>
    <div className=" from-red-50 via-blue-50 to-indigo-100 p-4">
      <div className="fixed inset-0 -z-10">
        <Particles />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 mt-20">
          <div className='flex  justify-center items-center gap-4'>
            {/* <div className="inline-flex items-center justify-center w-16 h-16
                  bg-white/5 backdrop-blur
                  rounded-2xl ring-1 ring-gray-200
                  mb-4">
              <QrCode className="w-8 h-8 text-gray-800" />
            </div> */}

            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent mb-2">
              {/* <DecryptedText 
                text='QRify'
                speed={100}
                maxIterations={20}
                animateOn='view'
              />  */}
              <SplitText 
                text='QRify'
                delay={200}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                rootMargin="-100px"
                textAlign="center"
                className="leading-[1.2] py-2"
              />
            </h1>
          </div>
          
          <p className="text-gray-600 text-lg">
             <DecryptedText 
              text='Generate QR codes for URLs, text, and contact info, email, callsm SMS, and WiFi'
              speed={100}
              maxIterations={20}
              animateOn='view'
            /> 
           
          </p>

        </div>
        <AnimatedContent
          distance={250}
          direction="vertical"
          reverse={false}
          duration={2.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={0.6} 
        >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-8 md:p-12 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full max-w-7xl mx-auto">
          <TabNavigation 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {getSectionTitle()}
                </h2>

                {renderInputSection()}

                <button
                  onClick={resetForm}
                  className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
                >
                  Clear All Fields
                </button>
              </div>

              {/* QR Code Display Section */}
              <div className="flex flex-col items-center space-y-6 ">
                <h2 className="text-2xl font-semibold text-gray-800">
                  <DecryptedText text='Generated QR Code'/></h2>
                
                <QRDisplay qrData={qrData} />

                <ActionButtons 
                  qrData={qrData} 
                  activeTab={activeTab} 
                  qrContainerRef={qrContainerRef} 
                />

                <DataPreview qrData={qrData} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Generate QR codes instantly • No data stored • Free to use</p>
        </div>
        </AnimatedContent>
      </div>
    </div>
    </>
  )
}
