export const userData = [
  {
    id: 1,
    avatar: "/avatar.gif",
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
      {
        id: 6,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message: "That is good to hear!",
      },
      {
        id: 7,
        avatar: "/avatar.gif",
        name: "Rahul Goel",
        message: "How has your day been so far?",
      },
      {
        id: 8,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message:
          "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
      },
      {
        id: 9,
        avatar: "/avatar.gif",
        name: "Rahul Goel",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: 10,
        avatar: "/avatar.gif",
        name: "Rahul Goel",
        message: "How has your day been so far?",
      },
      {
        id: 11,
        avatar: "/LoggedInUser.jpg",
        name: "Jakob Hoeg",
        message:
          "It has been good. I went for a run this morning and then had a nice breakfast. How about you?",
      },
      {
        id: 12,
        avatar: "/avatar.gif",
        name: "Rahul Goel",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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

export interface User {
  id: number;
  avatar: string;
  messages: Message[];
  name: string;
}
