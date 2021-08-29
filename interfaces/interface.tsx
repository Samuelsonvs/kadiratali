import { Dispatch, SetStateAction } from "react";
export interface Children {
  children: JSX.Element;
}

export interface ContainerProps extends Children {
  customTitle?: string;
}