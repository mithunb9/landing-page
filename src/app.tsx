import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import { Card } from "./components";
import Particles from "preact-particles";
import { loadFull } from "tsparticles";
import configJson from "./particles-config";
import "./app.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export function App() {
  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    loadFull(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const onArrowClick = () => {
    window.scrollTo({
      //@ts-ignore
      top: document.getElementById("projects").offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <Particles
          id="tsparticles"
          options={configJson}
          init={particlesInit}
          loaded={particlesLoaded}
          class="absolute z-[-1]"
        />

        <div className="animate-bounce text-center absolute w-screen bottom-2.5">
          <FontAwesomeIcon
            icon={faArrowDown}
            class="fixed"
            size="3x"
            onClick={onArrowClick}
          />
        </div>

        <main
          id="main"
          class="bg-black w-screen h-screen flex justify-center items-center"
        >
          <h1>Hi 👋, I'm Mithun Balasubramanian</h1>
        </main>
        <div class="bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,256L120,218.7C240,181,480,107,720,112C960,117,1200,203,1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div id="projects" class="w-screen h-screen bg-[#0099ff]">
          <h1 className="3xl text-center py-10">Featured Projects</h1>
          <div class="flex flex-auto items-center justify-center flex-wrap space-x-5">
            <Card
              title="Cotes"
              body="Cotes aims to revolutionize taking notes and learning in Computer Science. Originally built for HackSMU 2022, we aim to be a versatile, open-source note taking solution for professionals, students and hobbyists alike. This project is a WIP and undergoing major restructuring."
              tags={["React", "TypeScript", "NodeJS", "Express", "MongoDB"]}
            />
            <Card
              title="Cotes"
              body="Cotes aims to revolutionize taking notes and learning in Computer Science. Originally built for HackSMU 2022, we aim to be a versatile, open-source note taking solution for professionals, students and hobbyists alike. This project is a WIP and undergoing major restructuring."
              tags={["React", "TypeScript", "NodeJS", "Express", "MongoDB"]}
            />
            <Card
              title="Cotes"
              body="Cotes aims to revolutionize taking notes and learning in Computer Science. Originally built for HackSMU 2022, we aim to be a versatile, open-source note taking solution for professionals, students and hobbyists alike. This project is a WIP and undergoing major restructuring."
              tags={["React", "TypeScript", "NodeJS", "Express", "MongoDB"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
