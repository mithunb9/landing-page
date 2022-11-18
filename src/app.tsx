import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import { Card } from "./components";
import Particles from "preact-particles";
import { loadFull } from "tsparticles";
import "./app.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export function App() {
  const [index, setIndex] = useState(0);

  const particlesConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble",
        },
        onclick: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

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
    let position;

    switch (index) {
      case 0:
        //@ts-ignore
        position = document.getElementById("projects").offsetTop;
        setIndex(nextIndex(index));
        break;
      case 1:
        //@ts-ignore
        position = document.getElementById("contact").offsetTop;
        setIndex(nextIndex(index));
        break;
    }
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const nextIndex = (index: number) => {
    if (index == 2) {
      index = 0;
    } else {
      index += 1;
    }

    return index;
  };

  return (
    <>
      <div>
        <div class="fixed">
          <Particles
            id="tsparticles"
            options={particlesConfig}
            init={particlesInit}
            loaded={particlesLoaded}
          />
        </div>
        <main
          id="main"
          class="w-screen h-screen flex justify-center items-center"
        >
          <div class="flex flex-col text-center">
            <h1>Hi 👋, I'm Mithun Balasubramanian</h1>
            <p>
              Thank you for visiting my website! While its undergoing some
              restructuring, I've setup a landing page. Enjoy!{" "}
            </p>
          </div>
        </main>
        <div class="bg-black">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#911c2a"
              fill-opacity="1"
              d="M0,64L40,85.3C80,107,160,149,240,160C320,171,400,149,480,117.3C560,85,640,43,720,42.7C800,43,880,85,960,122.7C1040,160,1120,192,1200,197.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div id="projects" class="w-screen h-screen bg-[#911c2a] z-1">
          <h1 className="3xl text-center py-10">Featured Projects</h1>
          <div class="flex flex-auto items-center justify-center flex-wrap space-x-5 ">
            <Card
              title="Cotes"
              body="Cotes aims to revolutionize taking notes and learning in Computer Science. Originally built for HackSMU 2022, we aim to be a versatile, open-source note taking solution for professionals, students and hobbyists alike. This project is a WIP and undergoing major restructuring."
              tags={["Next.js", "TypeScript", "Node.js", "MongoDB"]}
              links={[
                {
                  name: "GitHub",
                  url: "https://www.github.com/mithunb9/cotes",
                },
                {
                  name: "Production",
                  url: "https://cotes.mithunb.com",
                },
              ]}
            />
            <Card
              title="Clip!"
              body="I worked with a team to create an interactive educational platform built for virtual learning environments to help facilitate productivity and interaction between students. The project consists of discussion boards and AI Bots to answer simple questions. I helped build the frontend of the project with styling and functionality. Submitted to OneHacks (1st Place)."
              tags={["JavaScript", "Node.js", "React.js", "Python", "Flask"]}
              links={[
                {
                  name: "Devpost",
                  url: "https://devpost.com/software/clip",
                },
              ]}
            />
            <Card
              title="NHS Status Checker"
              body="I created a website for checking the membership status of NHS members for our school's chapter of NHS. Built using JavaScript and Next.js"
              tags={["React", "Node.js", "Next.js", "REST API"]}
              links={[
                {
                  name: "GitHub",
                  url: "https://www.github.com/mithunb9/cotes",
                },
                {
                  name: "Production",
                  url: "https://nhssystem.vercel.app/",
                },
              ]}
            />
          </div>
        </div>
        <div className="animate-bounce text-center fixed w-screen bottom-2.5">
          <FontAwesomeIcon
            icon={faArrowDown}
            class="fixed"
            size="3x"
            onClick={onArrowClick}
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#911c2a"
            fill-opacity="1"
            d="M0,160L40,149.3C80,139,160,117,240,96C320,75,400,53,480,80C560,107,640,181,720,197.3C800,213,880,171,960,133.3C1040,96,1120,64,1200,58.7C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <div id="contact" class="w-screen h-screen bg-black z-1">
          <h1 className="3xl text-center py-10">Contact Me</h1>
          <div class="flex flex-auto items-center justify-center flex-wrap space-x-5 ">
            <a href="https://www.github.com/mithunb9" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/mithunb9" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="mailto:mithun@mithunb.com" target="_blank">
              <FontAwesomeIcon icon={faMailBulk} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
