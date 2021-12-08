// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Todos from "@/db/todoSchema";
import connectDB from "@/db/mondoDb";
import { Database } from "@/interfaces/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Database.Data>
) {
  await connectDB();
  const method = req.method;
  const { tab, name, content, deadline, id } =
    req.body && JSON.parse(req.body).data;
  try {
    switch (method) {
      case "GET":
        const allTodos = await Todos.find({});
        res.status(200).json({ allTodos });
        break;
      case "POST":
        const newEntry = new Todos({
          name,
          tab,
          content,
          deadline,
        });
        const entry = await newEntry.save().then((savedEntry) => savedEntry);
        res.status(200).json({ entry });
        break;
      case "DELETE":
        const TodoList = await Todos.findById(id);
        const isRemove = await TodoList?.remove().then(
          (removedEntry) => removedEntry._id.toString() === id
        );
        res.status(200).json({ isRemove });
        break;
      default:
        res.status(200).json({ undef: "Undefined method" });
        break;
    }
  } catch (err) {
    console.log("inside error");
    return res.status(400).json(err as Error);
  }
}
