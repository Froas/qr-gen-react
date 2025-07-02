import React from 'react';

interface DataPreviewProps {
  qrData: string;
}

export const DataPreview: React.FC<DataPreviewProps> = ({ qrData }) => {
  if (!qrData) return null;

  return (
    <div className="w-full max-w-sm">
      <h3 className="text-sm font-medium text-gray-700 mb-2">QR Code Data:</h3>
      <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-600 max-h-32 overflow-y-auto">
        <pre className="whitespace-pre-wrap break-words">{qrData}</pre>
      </div>
    </div>
  );
};