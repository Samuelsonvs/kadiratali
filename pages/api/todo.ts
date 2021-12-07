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
      case "POST":
        const newEntry = new Todos({
          name,
          tab,
          content,
          deadline,
        });
        await newEntry.save();
        res.status(200).json({ newEntry });
        break;
      case "DELETE":
        const TodoList = await Todos.findById(id);
        await TodoList?.remove();
        res.status(200).json({ remove: "Comment has been removed" });
        break;
      default:
        const allTodos = await Todos.find({});
        res.status(200).json({ allTodos });
        break;
    }
  } catch (err) {
    console.log("inside error");
    return res.status(400).json(err as Error);
  }
}
