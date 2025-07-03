import SplitText from "./react-bits/SplitText/SplitText";

export default function DocPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SplitText
            text="QRify Documentation"
            splitType="words"
            delay={100}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          />
          <p className="text-xl text-gray-600">
            Everything you need to know about generating QR codes
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          {/* What is QRify */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is QRify?</h2>
            <p className="text-gray-700 leading-relaxed">
              QRify is a modern, lightning-fast web application for generating QR codes instantly. 
              Built with React, TypeScript, and Tailwind CSS, it provides a beautiful and intuitive 
              interface for creating QR codes for various types of content.
            </p>
          </section>

          {/* Supported QR Types */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported QR Code Types</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📱 URL</h3>
                <p className="text-sm text-gray-600">Generate QR codes for websites and links</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📝 Text</h3>
                <p className="text-sm text-gray-600">Convert any text into a scannable QR code</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">👤 Contact (vCard)</h3>
                <p className="text-sm text-gray-600">Share contact information instantly</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📧 Email</h3>
                <p className="text-sm text-gray-600">Create mailto links as QR codes</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📞 Phone</h3>
                <p className="text-sm text-gray-600">Generate QR codes for phone numbers</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📶 WiFi</h3>
                <p className="text-sm text-gray-600">Share WiFi credentials securely</p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How QR Generation Works</h2>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3">🔒 Privacy First</h3>
              <p className="text-blue-800 mb-4">
                All QR codes are generated entirely in your browser. No data is sent to external servers, 
                ensuring your privacy and security.
              </p>
              
              <h3 className="font-semibold text-blue-900 mb-3">⚡ Technology Stack</h3>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Primary:</strong> QRious library loaded via CDN for high-quality generation</li>
                <li>• <strong>Fallback:</strong> Google Charts API or QR Server for reliability</li>
                <li>• <strong>Rendering:</strong> HTML5 Canvas for crisp, scalable QR codes</li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Ultra Fast</h3>
                <p className="text-sm text-gray-600">Instant QR code generation</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">📱</span>
                </div>
                <h3 className="font-semibold mb-2">Responsive</h3>
                <p className="text-sm text-gray-600">Works on all devices</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 text-xl">💾</span>
                </div>
                <h3 className="font-semibold mb-2">Download</h3>
                <p className="text-sm text-gray-600">Save or copy QR codes</p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span>Choose the type of QR code you want to generate</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span>Fill in the required information in the form</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span>Your QR code will be generated instantly</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span>Download, copy, or scan your QR code</span>
                </li>
              </ol>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Built With</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'React', color: 'bg-blue-100 text-blue-800' },
                { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
                { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
                { name: 'Vite', color: 'bg-purple-100 text-purple-800' },
                { name: 'QRious', color: 'bg-green-100 text-green-800' }
              ].map((tech) => (
                <span key={tech.name} className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}>
                  {tech.name}
                </span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <section className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Made with ❤️ by <a href="https://github.com/Froas" className="text-blue-600 hover:underline">Froas</a>
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/Froas/qr-gen-react" className="text-blue-600 hover:underline">
                GitHub Repository
              </a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-blue-600 hover:underline">
                Report Issues
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}