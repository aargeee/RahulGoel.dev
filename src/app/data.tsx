export const userData = [
  {
    id: 1,
    avatar: "/avatar.gif",

    sections: [
      {
        id: 1,
        title: "Introduction",
        messages: [
          {
            id: 2,
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey!",
          },
          {
            id: 3,
            avatar: "/avatar.gif",
            name: "Rahul Goel",
            message: "How are you?",
          },
          {
            id: 4,
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "I am good, you?",
          },
          {
            id: 5,
            avatar: "/avatar.gif",
            name: "Rahul Goel",
            message: "I am good too!",
          },
        ],
      },
      {
        id: 2,
        title: "Skills",
        messages: [
          {
            id: 2,
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey!",
          },
          {
            id: 3,
            avatar: "/avatar.gif",
            name: "Rahul Goel",
            message: "How are you?",
          },
          {
            id: 4,
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "I am good, you?",
          },
          {
            id: 5,
            avatar: "/avatar.gif",
            name: "Rahul Goel",
            message: "I am good too!",
          },
        ],
      },
      {
        id: 3,
        title: "Something Else",
        messages: [
          {
            id: 2,
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "Hey!",
          },
          {
            id: 3,
            avatar: "/avatar.gif",
            name: "Rahul Goel",
            message: "How are you?",
          },
          {
            id: 4,
            avatar: "/LoggedInUser.jpg",
            name: "Jakob Hoeg",
            message: "I am good, you?",
          },
          {
            id: 5,
            avatar: "/avatar.gif",
            name: "Rahul Goel",
            message: "I am good too!",
          },
        ],
      },
    ],

    name: "Rahul Goel",
  },
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
  id: 5,
  avatar: "/LoggedInUser.jpg",
  name: "Jakob Hoeg",
};

export type LoggedInUserData = typeof loggedInUserData;

export interface Message {
  id: number;
  avatar: string;
  name: string;
  message: string;
}

export interface MessageSection {
  id: number;
  title: string;
  messages: Message[];
}

export interface User {
  id: number;
  avatar: string;
  sections: MessageSection[];
  name: string;
}
