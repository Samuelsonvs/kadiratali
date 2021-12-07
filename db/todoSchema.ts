import { model, models, Schema, Model } from "mongoose";

import { Database } from "@/interfaces/db";

const TodoSchema = new Schema(
  {
    tab: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todos: Model<Database.IUser> = models.Todos || model("Todos", TodoSchema);

export default Todos;
