import React, { useState } from 'react';
import { Download, Copy, Check, Send } from 'lucide-react';

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
  const [qrCopied, setQRCopied] = useState(false)

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

  const copyQRCodeToClipboard = async () => {
    const img = qrContainerRef.current?.querySelector('img');
    const canvas = qrContainerRef.current?.querySelector('canvas');
    try {
      let blob: Blob | null = null;
      
      if (img) {
        const response =await fetch(img.src)
        blob = await response.blob()
      } else if (canvas) {
        const dataUrl = canvas.toDataURL('image/png')
        const res = await fetch(dataUrl)
        blob = await res.blob();
      } else {
        console.info('There is no img or canvas: ', qrContainerRef.current)
      }
       
      if (blob) {
        const clipboardItem = new window.ClipboardItem({ [blob.type]: blob });
        await navigator.clipboard.write([clipboardItem]);
        setQRCopied(true);
        setTimeout(() => setQRCopied(false), 2000);
        console.log('Copied QR successfully!');
      } else {
        console.error('No blob found to copy!');
      }
    } catch(err) {
      console.error('Failed to copy qrcode: ', err)
    }
  }

  if (!qrData) return null;

  return (
    <div className='flex flex-col'>
      <div className="flex gap-4 w-full max-w-[500px] items-stretch">
        <button
          onClick={downloadQRCode}
          className="h-12 flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        
        <button
          onClick={copyToClipboard}
          className="text-sm h-12 flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
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
      <div className="flex gap-4 mt-4 w-full max-w-sm items-stretch">
        <button
          onClick={downloadQRCode}
          className="h-12 flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg"
        >
          <Send className="w-4 h-4" />
          Share it
        </button>
        
        <button
          onClick={copyQRCodeToClipboard}
          className="text-sm h-12 flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium"
        >
          {qrCopied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy QR 
            </>
          )}
        </button>
      </div>
    </div>
  );
};