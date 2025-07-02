import FuzzyText from "./react-bits/FuzzyText/FuzzyText";
type NotFoundPageProps = {}

export const NotFoundPage = ({}: NotFoundPageProps) => (
  <>
    <div className="font-marker flex flex-col items-center min-h-screen w-full pt-32">
    <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.4} 
        enableHover={true}
        fontSize={"10rem"}
    >
        404
    </FuzzyText>
    <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.4} 
        enableHover={true}
        fontSize={"10rem"}
    >
        Not found
    </FuzzyText>
    </div>
  </>
);