import GlitchText from "./react-bits/GlitchText/GlitchText";
import SplashCursor from "./react-bits/SplashCursor/SplashCursor";
export default function DocPage() {
  return (
    <>
    {/* <SplashCursor /> */}
      <GlitchText
        speed={3}
        enableShadows={true}
        enableOnHover={false}
        className=''
      >
      This page is still under construction.
      </GlitchText>
    </>
  );
}