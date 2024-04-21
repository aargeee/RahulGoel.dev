import { ProjectCard } from "@/components/chat/project-card";
import { Badge } from "@/components/ui/badge";
import { ScrollBar } from "@/components/ui/scroll-area";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";
import { ReactNode } from "react";

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
  avatar: "/NPC.png",
  name: "NPC",
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
            name: "NPC",
            message:
              "Hello. I am an NPC interviewer. Start by introducing yourself.",
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
            name: "NPC",
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
                <div className="overflow-x-auto">
                  <ScrollArea className="lg:flex lg:justify-center">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-white text-white"
                        variant={"outline"}
                      >
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          width={25}
                          height={25}
                        />
                      </Badge>
                    ))}
                  </ScrollArea>
                </div>
              </div>
            ),
          },
          {
            avatar: "/NPC.png",
            name: "NPC",
            message:
              "Wow, impressive! So, are you currently working on any new skills?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p className="text-gray-50 line-through" style={{textDecoration: "line-through"}}>making friends</p>
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
            name: "NPC",
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
                  <span className="text-sm text-gray-400">
                    This is only a fraction of all the stuff I did that I felt
                    to be mature enough to have space here. Visit the portfolio
                    page for a comprehensive list.
                  </span>
                </p>
                <div className="flex flex-col">
                  <ProjectCard title="whwh" link="https://github.com/aargeee/whwh" desc="Test your webhook based applications gracefully" lang="Golang" stars={0} />
                  <ProjectCard title="goshowtree" link="https://github.com/aargeee/goshowtree" desc="A CLI tool to view contents of a directory." lang="Golang" stars={0} />
                </div>
              </div>
            ),
          },
          {
            avatar: "/NPC.png",
            name: "NPC",
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
            name: "NPC",
            message:
              "Do you have any formal education or courses you want to talk about?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: <div>
              <p>I am a junior at the <span className="font-bold">National Institute of Technology, Delhi</span>. I am expected to graduate by May 2025. I am pursuing Bachelor of Technology in the Electronics and Communication branch. Despite my background, I've been interested in Computers and Programming.</p>
              <br />
              <p>Throughout my education, I have kept a perfect track record. My current CGPA stands at 8.19 making me Rank 5 in my branch and Rank 12 in my batch.</p>
            </div>,
          },
        ],
      },
      {
        title: "Get in touch",
        messages: [
          {
            avatar: "/NPC.png",
            name: "NPC",
            message: "Cool! I'd like to get in touch with you",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p>Here are a few ways you can contact me!</p>
                <p><a className="underline" href="mailto:211220042@nitdelhi.ac.in">211220042@nitdelhi.ac.in</a></p>
              </div>
            ),
          },
          {
            avatar: "/NPC.png",
            name: "NPC",
            message:
              "Awesome! We are gonna love you in our team. Do you have a resume that I can share?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: (
              <div>
                <p>Thanks for the kind words😊</p>
                <p>
                  Here is my resume&nbsp;
                  <a
                    href="https://drive.google.com/file/d/1jEWOiY0IWr3VFnSFxhO7W9pNtOraoJPP/"
                    className="uppercase italic underline"
                    target="_blank"
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
            name: "NPC",
            message: "Are you currently working somewhere?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: <div>
              <p>Yes, I am. Here is the list of my work experience.</p>
              <div className="lg:ps-6 ps-2">
                <p className=""><span className="font-bold">Pixelotech</span> | Software Developer Intern</p>
                <p>I led the development of an in-house Job Applicant tracking software using Django, React, and Postgres. I seamlessly integrated into the Enterprise Information System team, contributing to collaborative efforts. My key role involved writing Django tests to verify API functionality, ensuring reliability throughout the system. Currently, I'm also focused on developing a CI/CD pipeline for our project, which will enhance our development workflow and streamline the deployment process.</p>
              </div>
            </div>,
          }
        ],
      },
    ],

    name: RG,
  },
];
