import { db } from "@/lib/endpoints";
import { Database } from "@/interfaces/db"

export const req = async({method, id, tab, name, content, deadline}: Database.Request) => {
  const params = {
    body: JSON.stringify({
        data: {
          id,
          tab,
          name,
          content,
          deadline
        },
      }),
      method,
  }

  const current = method === "GET" ? method : params
  const response = await fetch(db, {...current as Database.CurrentRequestParams}).then((res) => res.json()).then((promis) => promis);
  
  return response
}
