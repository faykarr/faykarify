import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SplashCursor />
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center items-start gap-4 h-screen">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="flex items-center gap-2">
                <h1 className="text-2xl text-white font-bold">
                  Hi 👋, I'm ready for
                </h1>
                <RotatingText
                  texts={['IT Support', 'Web Developer', 'Network Engineer', 'System Administrator']}
                  mainClassName="inline-flex px-2 sm:px-2 md:px-3 bg-[#84BE4A] text-[#091a2a] overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold transition-all"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </AnimatedContent>

            <div className="flex flex-col items-start gap-2">
              <SplitText
                text="I'm Nasyath Faykar"
                className="text-6xl font-semibold"
                delay={50}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />

              <SplitText
                text="IT Support Specialist | Web Developer"
                className="text-4xl font-semibold text-[#84BE4A]"
                delay={75}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>

            <div>
              <BlurText
                text="A dedicated IT Support professional with a strong foundation in hardware troubleshooting, network management, and system administration. Experienced in managing Debian-based servers and basic Linux server configurations. Additionally, proficient in web technologies such as HTML, CSS, JavaScript, and PHP. Providing a wellrounded technical skill set to support various IT environments."
                delay={90}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8"
              />
            </div>

            <div>
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <a
                  href="/faykar-cv.pdf"
                  download
                  className="bg-[#84BE4A] text-[#091a2a] px-5 py-4 rounded-lg text-xl font-semibold transition-all hover:bg-[#091a2a] hover:text-[#84BE4A] flex items-center gap-2 border-2 border-transparent hover:border-[#84BE4A] duration-300 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  Download CV
                </a>
              </AnimatedContent>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
