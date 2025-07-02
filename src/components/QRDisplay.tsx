import React, { useRef, useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { QRGenerator } from '../utils/qrGenerator';

interface QRDisplayProps {
  qrData: string;
}

export const QRDisplay: React.FC<QRDisplayProps> = ({ qrData }) => {
  const qrContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!qrData.trim() || !qrContainerRef.current) {
      if (qrContainerRef.current) {
        qrContainerRef.current.innerHTML = '';
      }
      return;
    }

    const generateQR = async () => {
      try {
        await QRGenerator.loadQRLibrary();
        QRGenerator.createQRCanvas(qrContainerRef.current!, qrData);
      } catch (error) {
        console.error('Error loading QR library:', error);
        QRGenerator.createFallbackQR(qrContainerRef.current!, qrData);
      }
    };

    generateQR();
  }, [qrData]);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 w-full max-w-sm">
      {qrData ? (
        <div className="text-center">
          <div ref={qrContainerRef} className="flex justify-center">
            {/* QR code will be dynamically inserted here */}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Scan this QR code with your device
          </p>
        </div>
      ) : (
        <div className="text-center py-16">
          <QrCode className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">
            Fill in the form to generate your QR code
          </p>
        </div>
      )}
    </div>
  );
};
