export class QRGenerator {
  static async loadQRLibrary(): Promise<void> {
    if (!(window as any).QRious) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load QR library'));
        document.head.appendChild(script);
      });
    }
  }

  static createQRCanvas(container: HTMLElement, text: string): void {
    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    new (window as any).QRious({
      element: canvas,
      value: text,
      size: 300,
      background: 'white',
      foreground: 'black',
      level: 'M'
    });
    
    canvas.className = 'w-full h-auto rounded-xl shadow-lg bg-white';
    canvas.style.maxWidth = '300px';
    canvas.style.height = 'auto';
  }

  static createFallbackQR(container: HTMLElement, text: string): void {
    container.innerHTML = '';
    const img = document.createElement('img');
    const encodedData = encodeURIComponent(text);
    
    img.src = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${encodedData}&choe=UTF-8`;
    img.alt = 'Generated QR Code';
    img.className = 'w-full h-auto rounded-xl shadow-lg bg-white p-4';
    img.style.maxWidth = '300px';
    img.style.height = 'auto';
    
    img.onerror = () => {
      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedData}&format=png&margin=10`;
    };
    
    container.appendChild(img);
  }
}