import { ProjectCard } from "@/components/chat/project-card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ReactNode } from "react";

const skills = [
  {
    name: "Go",
    image: "/skills/golang.svg",
  },
  {
    name: "Python",
    image: "/skills/python.svg",
  },
  {
    name: "Javascript",
    image: "/skills/js.svg",
  },
  {
    name: "TypeScript",
    image: "/skills/ts.svg",
  },
  {
    name: "React",
    image: "/skills/react.svg",
  },
  {
    name: "Next.js",
    image: "/skills/next.svg",
  },
  {
    name: "HTML5",
    image: "/skills/html5.svg",
  },
  {
    name: "CSS3",
    image: "/skills/css.svg",
  },
  {
    name: "Tailwind",
    image: "/skills/tw.svg",
  },
];

const RG = "Rahul Goel";

export const userData = [
  {
    avatar: "/avatar.gif",

    sections: [
      {
        title: "Introduction",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey! Introduce yourself",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <p>
                Sure! <br />
                {`I'm`} <span className="font-semibold">Rahul Goel</span>. I
                love development, I love finding out new ways to solve problems
                and getting things done and just playing with everything I can
                grab.
                <br />
                Most Importantly, I know how to code and I know how to do it
                correctly.
              </p>
            ),
          },
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "That's great!",
          },
        ],
      },
      {
        title: "Skills",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: <p>So, what skills have you learnt so far?</p>,
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div className="">
                <p>A full list of my skills are as follows</p>
                <div className="skills flex flex-wrap gap-1">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-white text-white"
                      variant={"outline"}
                    >
                      <Image
                        src={skill.image}
                        alt={skill.name}
                        width={35}
                        height={35}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            ),
          },
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Wow, good job! Are you trying to learn something new?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p className="line-through text-gray-400">making friends</p>
                <p>I'm tring DevOps and Machine Learning as well. Two wildly different areas, I know, but current market trends tell me doing this is the safest bet.</p>
              </div>
            ),
          },
        ],
      },
      {
        title: "Projects",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message:
              "Your skills are impressive! Do you have any supporting evidence for your skills mentioned?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p>
                  You bet I do! <br />
                  <span className="text-xs text-gray-400">
                    This is only a fraction of all the stuff I did that I felt
                    to be mature enough to have space here. Visit the portfolio
                    page for a comprehensive list.
                  </span>
                </p>
                <div className="flex flex-col">
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </div>
              </div>
            ),
          },
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Awesome! You seem to really know your stuff",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: "Thanks!😊",
          },
        ],
      },
      {
        title: "Education",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message:
              "Do you have any formal education or courses you want to talk about?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: <p>National Institute of Technology, Delhi</p>,
          },
        ],
      },
      {
        title: "Get in touch",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Cool! I'd like to get in touch with you",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: <div>
              <p>Here are a few ways you can contact me!</p>
              <p>rgoel1729@gmail.com</p>
            </div>,
          },
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Awesome! my boss is gonna love you in our team. Do you have a resume that I can share?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: <div>
              <p>Thanks for the kind words😊</p>
              <p>Here is my resume <a href="https://drive.google.com/file/d/1jEWOiY0IWr3VFnSFxhO7W9pNtOraoJPP/" className="uppercase italic underline">RESUME</a></p>
            </div>,
          },
        ],
      },
      {
        title: "Work Experience",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Are you currently working somewhere?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: "How are you?",
          },
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "I am good, you?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: "I am good too!",
          },
        ],
      },
    ],

    name: RG,
  },
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
  avatar: "/LoggedInUser.jpg",
  name: "Jakob Hoeg",
};

export type LoggedInUserData = typeof loggedInUserData;

export interface Message {
  avatar: string;
  name: string;
  message: ReactNode;
}

export interface MessageSection {
  title: string;
  messages: Message[];
}

export interface User {
  avatar: string;
  sections: MessageSection[];
  name: string;
}
