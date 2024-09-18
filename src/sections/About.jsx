import Globe from "react-globe.gl";
import Button from "../components/Button";

export default function About() {
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ],
  }));

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/Christopher Benedicto-logo-white .png"
              alt="grid-1"
              className="w-full sm:h-[217px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi!</p>
              <p className="grid-subtext">
                I&apos;m Christopher, a really curious developer who is looking
                for opportunities to learn and grow. I&apos;m a fresh graduate
                of Central Philippine University, and currently self-studying
                new web technologies. Although I&apos;m still not as experienced
                as other developers, I&apos;m willing to learn and adapt to new
                technologies
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/programs-05-535555859.png"
              alt="grid-2"
              className="w-full sm:h-[217px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I mostly use React.js and Next.js with a basic knowledge for
                python, node and php for backend. I&apos;m also familiar with
                postgresql and mysql for databases.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-6 flex flex-col justify-center items-center">
          <div className="grid-container flex flex-col justify-center items-center">
            <div className="rounded-3xl w-full sm:h-[316px] h-fit flex justify-center items-center ">
              <Globe
                height={350}
                width={316}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                arcsData={arcsData}
                arcColor={"color"}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to collab!</p>
              <p className="grid-subtext">Hit me up</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px ] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Me as a Developer</p>
              <p className="grid-subtext">
                I enjoy building websites. I am constantly learning emerging
                technlogies and trends to keep up to date as well as honing on
                my current tech stack. Although I still lack experience,
                learning and adapting to new technologies is my main goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
