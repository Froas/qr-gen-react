import React from 'react'
import type { SMSInfo } from '../../types'

interface SMSInputProps {
  smsInfo: SMSInfo
  onChange: (smsInfo: SMSInfo) => void
}

export const SMSInput: React.FC<SMSInputProps> = ({ smsInfo, onChange }) => {
  const updateField = (field: keyof SMSInfo, value: string) => {
    onChange({ ...smsInfo, [field]: value })
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={smsInfo.phoneNumber}
          onChange={(e) => updateField('phoneNumber', e.target.value)}
          placeholder="+81 90-1234-5678"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          value={smsInfo.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Your SMS message..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
        />
      </div>
    </div>
  )
}