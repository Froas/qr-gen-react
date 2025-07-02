import SplashCursor from "./react-bits/SplashCursor/SplashCursor";
export default function DocPage() {
  return (
    <>
    <SplashCursor />
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 tracking-tight">QRify Doc Page</h1>
        <div className="text-gray-500 text-base mb-6">This page is still under construction.</div>
        <div className="px-4 py-2 bg-gray-100 rounded-xl text-gray-400 text-sm"> Please check back later</div>
      </div>
    </>
  );
}