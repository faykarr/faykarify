import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center items-start gap-3 h-screen border">
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
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
