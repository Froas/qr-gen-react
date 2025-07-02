# QRify

QRify is a modern web app for instantly generating QR codes for URLs, text, and contact information. Built with **React**, **TypeScript**, and **Tailwind CSS** for a lightning-fast and beautiful user experience.

---

## 🚀 Features

* **Ultra-fast** QR code generation
* Generate QR codes for:

  * **URLs**
  * **Text**
  * **Contact info** (vCard)
* Download or copy your QR code
* Clean, minimal, responsive UI
* Easy to install and run locally

---

## ⚡️ How QR Generation Works

QR codes are generated entirely in the browser:

* Uses the [QRious](https://github.com/neocotic/qrious) library **via CDN** for high-quality, on-the-fly QR code creation.
* The QRious script is loaded **dynamically** if it’s not already present in the browser window.
* QR codes are rendered to a `<canvas>` element and displayed instantly via a React ref.
* **Fallback:** If QRious fails or cannot be loaded, QRify gracefully falls back to generating a QR code image using [Google Charts API](https://developers.google.com/chart/infographics/docs/qr_codes) or [QR Server](https://goqr.me/api/).
* *No data is sent or stored on any server — everything works right in your browser!*


---

## 🛠️ Tech Stack

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [QRious (CDN)](https://cdnjs.com/libraries/qrious) (for QR code generation)
---

## 💻 Getting Started

1. **Clone the repo:**

   ```sh
   git https://github.com/Froas/qr-gen-react.git
   cd qr-gen-react
   ```
2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```
3. **Run locally:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```
   (The app uses [Vite](https://vite.dev) for local development)
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 💡 Use Cases

* Share website links as QR codes
* Generate QR for plain text (messages, codes, etc.)
* Instantly create vCards (contacts) as QR codes
* Download or copy generated codes for use anywhere

---

## ✨ Coming Soon / TODO

* 📖 Documentation page
* 📲 Share QR code directly (social, etc.)
* 🖼️ Add custom logo/image to center of QR code

---

## 📄 License

[MIT](LICENSE)
---

## 🔗 Links

**Made with ❤️ by [Froas](https://github.com/Froas)**

---

## 🙌 Contributing

Pull requests and issues are welcome!

---

**Enjoy using QRify!**
