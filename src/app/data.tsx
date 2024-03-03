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
                {`I'm`} <span className="font-semibold">Rahul Goel</span>. I love
                development, I love finding out new ways to solve problems and
                getting things done and just playing with everything I can grab.
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
                    <Badge key={index} className="bg-white text-white" variant={"outline"}>
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
            message: "I am good, you?",
          },
          {
            avatar: "/avatar.gif",
            name: RG,
            message: "I am good too!",
          },
        ],
      },
      {
        title: "Something Else",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey!",
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
      {
        title: "Something Else",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey!",
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
      {
        title: "Something Else",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey!",
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
      {
        title: "Something Else",
        messages: [
          {
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey!",
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
