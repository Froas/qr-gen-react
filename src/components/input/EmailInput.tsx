import React from 'react';
import type { EmailInfo } from '../../types';

interface EmailInputProps {
  emailInfo: EmailInfo;
  onChange: (emailInfo: EmailInfo) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({ emailInfo, onChange }) => {
  const updateField = (field: keyof EmailInfo, value: string) => {
    onChange({ ...emailInfo, [field]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Recipient Email
        </label>
        <input
          type="email"
          value={emailInfo.to}
          onChange={(e) => updateField('to', e.target.value)}
          placeholder="recipient@example.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          value={emailInfo.subject}
          onChange={(e) => updateField('subject', e.target.value)}
          placeholder="Email subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message Body
        </label>
        <textarea
          value={emailInfo.body}
          onChange={(e) => updateField('body', e.target.value)}
          placeholder="Email message..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
        />
      </div>
    </div>
  );
};