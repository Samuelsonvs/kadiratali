import { Document } from "mongoose";

export namespace Database {
  interface IUser extends Document {
    tab: string;
    name: string;
    content: string;
    deadline: string;
  }

  interface Data {
    name?: string;
    error?: string;
    remove?: string;
    undef?: string;
    newEntry?: {
      name: string;
      tab: string;
      content: string;
      deadline: string;
    };
    allTodos?: any;
    entry?: any;
    isRemove?: boolean;
  }

  interface Request {
    method: string;
    id?: string;
    tab?: string;
    name?: string;
    content?: string;
    deadline?: string | Date;
  }
  interface CurrentRequestParams {
    body: string;
    method: string;
  }

}
