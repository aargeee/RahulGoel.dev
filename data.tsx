import { ProjectCard } from "@/components/chat/project-card";
import { Badge } from "@/components/ui/badge";
import { ScrollBar } from "@/components/ui/scroll-area";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import { ReactNode } from "react";

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
  avatar: "/NPC.png",
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
            avatar: "/NPC.png",
            name: "Jakob Hoeg",
            message:
              "Hey there! Welcome to the interview. Let's dive right in, shall we? Why don't you start by telling me a bit about yourself?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <p>
                Hey there! I'm Rahul Goel. Dev enthusiast, problem-solver
                extraordinaire, and all-around tech tinkerer. I'm all about
                diving into challenges headfirst, finding creative solutions,
                and just having a blast with whatever comes my way. Oh, and did
                I mention I know how to code? And not just any code - the good
                stuff. So, if you're looking for someone who's got the skills
                and the spirit to get things done, you've found your match!
              </p>
            ),
          },
        ],
      },
      {
        title: "Skills",
        messages: [
          {
            avatar: "/NPC.png",
            name: "Jakob Hoeg",
            message: (
              <p>
                Amazing! So, what are some of your notable skills that you think
                make you stand out?
              </p>
            ),
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div className="">
                <p>
                  Certainly. I possess proficiency in various programming
                  languages such as Golang, Python, C++, and JavaScript,
                  showcasing versatility in software development. Within web
                  development, I am well-versed in frameworks including Django
                  and ReactJS. I maintain a commitment to best practices such as
                  Test-Driven Development to ensure robust software solutions.
                  In essence, my approach combines technical depth with a
                  dedication to excellence in coding methodologies.
                </p>
                <div className="skill overflow-x-auto mt-2">
                  <ScrollArea className="w-[200] whitespace-nowrap">
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
                          className="aspect-square"
                        />
                      </Badge>
                    ))}
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              </div>
            ),
          },
          {
            avatar: "/NPC.png",
            name: "Jakob Hoeg",
            message:
              "Wow, impressive! So, are you currently working on mastering any new skills?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p className="line-through text-gray-400">making friends</p>
                <p>
                  In addition to my current skills, I'm currently focusing on
                  mastering DevOps and Machine Learning. Despite being disparate
                  fields, I believe these areas align well with prevailing
                  market demands, ensuring a versatile skill set for future
                  endeavors.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        title: "Projects",
        messages: [
          {
            avatar: "/NPC.png",
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
            avatar: "/NPC.png",
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
            avatar: "/NPC.png",
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
            avatar: "/NPC.png",
            name: "Jakob Hoeg",
            message: "Cool! I'd like to get in touch with you",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p>Here are a few ways you can contact me!</p>
                <p>rgoel1729@gmail.com</p>
              </div>
            ),
          },
          {
            avatar: "/NPC.png",
            name: "Jakob Hoeg",
            message:
              "Awesome! my boss is gonna love you in our team. Do you have a resume that I can share?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p>Thanks for the kind words😊</p>
                <p>
                  Here is my resume{" "}
                  <a
                    href="https://drive.google.com/file/d/1jEWOiY0IWr3VFnSFxhO7W9pNtOraoJPP/"
                    className="uppercase italic underline"
                  >
                    RESUME
                  </a>
                </p>
              </div>
            ),
          },
        ],
      },
      {
        title: "Work Experience",
        messages: [
          {
            avatar: "/NPC.png",
            name: "Jakob Hoeg",
            message: "Are you currently working somewhere?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: "How are you?",
          },
          {
            avatar: "/NPC.png",
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
