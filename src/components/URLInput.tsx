import React from 'react';
import ShinyText from './react-bits/ShinyText/ShinyText';
interface URLInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const URLInput: React.FC<URLInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
       <ShinyText text='Website URL' disabled={false} speed={3} className=''/> 
      </label>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com"
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
      />
      <p className="text-xs text-gray-500 mt-1">
        Enter a website URL. If you don't include http://, we'll add https:// automatically.
      </p>
    </div>
  );
};