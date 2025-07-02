import React, { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';

interface ActionButtonsProps {
  qrData: string;
  activeTab: string;
  qrContainerRef: React.RefObject<HTMLDivElement | null>;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  qrData, 
  activeTab, 
  qrContainerRef 
}) => {
  const [copied, setCopied] = useState(false);

  const downloadQRCode = () => {
    if (!qrData) return;
    
    const canvas = qrContainerRef.current?.querySelector('canvas');
    const img = qrContainerRef.current?.querySelector('img');
    
    if (canvas) {
      const link = document.createElement('a');
      link.download = `qr-code-${activeTab}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } else if (img) {
      const link = document.createElement('a');
      link.download = `qr-code-${activeTab}.png`;
      link.href = img.src;
      link.click();
    }
  };

  const copyToClipboard = async () => {
    if (qrData) {
      try {
        await navigator.clipboard.writeText(qrData);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  if (!qrData) return null;

  return (
    <div className="flex gap-4 w-full max-w-sm">
      <button
        onClick={downloadQRCode}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg"
      >
        <Download className="w-4 h-4" />
        Download
      </button>
      
      <button
        onClick={copyToClipboard}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-600" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Data
          </>
        )}
      </button>
    </div>
  );
};