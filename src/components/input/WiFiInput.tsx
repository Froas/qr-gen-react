import React from 'react'
import type { WiFiInfo } from '../../types'

interface WiFiInputProps {
  wifiInfo: WiFiInfo
  onChange: (wifiInfo: WiFiInfo) => void
}

export const WiFiInput: React.FC<WiFiInputProps> = ({ wifiInfo, onChange }) => {
  const updateField = (field: keyof WiFiInfo, value: string | boolean) => {
    onChange({ ...wifiInfo, [field]: value })
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Network Name (SSID)
        </label>
        <input
          type="text"
          value={wifiInfo.ssid}
          onChange={(e) => updateField('ssid', e.target.value)}
          placeholder="My WiFi Network"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          value={wifiInfo.password}
          onChange={(e) => updateField('password', e.target.value)}
          placeholder="WiFi password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Security Type
        </label>
        <select
          value={wifiInfo.security}
          onChange={(e) => updateField('security', e.target.value as 'WPA' | 'WEP' | 'nopass')}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        >
          <option value="WPA">WPA/WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">No Password</option>
        </select>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="hidden"
          checked={wifiInfo.hidden}
          onChange={(e) => updateField('hidden', e.target.checked)}
          className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
        />
        <label htmlFor="hidden" className="ml-2 text-sm font-medium text-gray-700">
          Hidden Network
        </label>
      </div>
    </div>
  )
}