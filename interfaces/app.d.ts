import { Dispatch, SetStateAction } from "react";

export namespace App {
  interface Children {
    children: JSX.Element;
  }

  interface ContainerProps extends Children {
    customTitle?: string;
  }

  interface navListType {
    [key: string]: string;
  }

  interface FormInputs extends navListType {
    command: string;
  }

  interface TextLayoutType {
    text: string;
    underscore: boolean;
  }

  interface drp {
    [key: number]: number;
    length: number;
  }

  interface FormValues {
    tab: string;
    name: string;
    content: string;
  }

  interface GoogleAnalytic {
    action: string;
    category: string;
    label: string;
    value: string;
  }

  interface Post {
    _id: string;
    content: string;
    name: string;
    createDate: string;
    deadlineDate: string;
  }

  interface PostGroups {
    School: Post;
    Nesine: Post;
    Bootcamp: Post;
  }
}
