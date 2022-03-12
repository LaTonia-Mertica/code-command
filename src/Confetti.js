import React from "react";
import Particles from "react-tsparticles";

export default function Confetti() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#fff",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          detectsOn: "window",
        },
        emitters: {
          position: {
            x: 50,
            y: 100,
          },
          rate: {
            quantity: 10,
            delay: 0.25,
          },
        },
        particles: {
          color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
          },
          move: {
            decay: 0.05,
            direction: "top",
            enable: true,
            gravity: {
              enable: true,
              maxSpeed: 150,
            },
            outModes: {
              top: "none",
              default: "destroy",
            },
            speed: { min: 25, max: 50 },
          },
          number: {
            value: 0,
          },
          opacity: {
            value: 1,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 30,
            },
          },
          tilt: {
            direction: "random",
            enable: true,
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 30,
            },
          },
          size: {
            value: 11,
          },
          roll: {
            lighten: {
              enable: true,
              value: 27,
            },
            enable: true,
            speed: {
              min: 5,
              max: 15,
            },
          },
          wobble: {
            distance: 67,
            enable: true,
            speed: {
              min: -7,
              max: 7,
            },
          },
          shape: {
            type: [
              "circle",
              "square",
              "polygon",
              "character",
              "character",
              "character",
              "image",
              "image",
              "image",
            ],
            options: {
              image: [
                {
                  src: "https://particles.js.org/images/fruits/banana.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 17,
                    },
                  },
                },
                {
                  src: "https://particles.js.org/images/fruits/cherry.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 15,
                    },
                  },
                },
                {
                  src: "https://particles.js.org/images/fruits/pepper.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 13,
                    },
                  },
                },
                {
                  src: "https://particles.js.org/images/fruits/star.png",
                  width: 32,
                  height: 32,
                  particles: {
                    size: {
                      value: 37,
                    },
                  },
                },
              ],
              polygon: [
                {
                  sides: 5,
                },
                {
                  sides: 7,
                },
              ],
              character: [
                {
                  fill: true,
                  font: "Verdana",
                  value: [
                    "✅",
                    "🤓",
                    "💯",
                    "😤",
                    "🎯",
                    "🤠",
                    "📌",
                    "😳",
                    "🚀",
                    "🤪",
                    "💥",
                    "😲",
                    "👣",
                  ],
                  style: "",
                  weight: 300,
                },
              ],
            },
          },
        },
      }}
    />
  );
}
