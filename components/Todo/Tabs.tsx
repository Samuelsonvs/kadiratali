import React, { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';

import dateResolver from "@/utils/dateResolver";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = () => {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState({
      School: {},
      Nesine: {},
      Bootcamp: {},
    })

    const deleteHandler = async(id: string) => {
      await fetch("/api/todo", {
        body: JSON.stringify({
          data: {
            id
          }
        }),
        method: "DELETE",
      }).then((response) => console.log(response))
    }

    useEffect(() => {
      (async () => {
        const { allTodos } = await fetch("/api/todo").then((res) => res.json()).then((promis) => promis)
        if (allTodos) {
          const filteredTodos = allTodos.reduce((acc:any, cur:any) => {
            const createDate = dateResolver(cur.createdAt)
            const deadlineDate = dateResolver(cur.deadline)
            const { content, name, tab, _id } = cur
            return {...acc, [tab]: [...acc[tab],{_id, content, name, createDate, deadlineDate}] }
          }, {School: [], Nesine: [], Bootcamp: [] })
          const { School, Nesine, Bootcamp } = filteredTodos
          setCategories({
            School: {...School},
            Nesine: {...Nesine},
            Bootcamp: {...Bootcamp}
          })
        }
        setLoading(true)
      })();
    }, [])

  return (
    <div className="text-primary">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-600 ring-opacity-60',
                    selected
                      ? 'border border-green-500'
                      : 'text-green-300 hover:bg-white/[0.12] hover:text-green-500'
                  )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-transparent rounded-xl p-3'
              )
            }
            >
              <ul>
                {Object.values(posts).map((post:any) => (
                  <li
                    key={post._id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-lg font-semibold leading-5">
                      {post.name}
                    </h3>
                    <p className="py-2">
                      {post.content}
                    </p>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.createDate}</li>
                      <li>&#8594;</li>
                      <li>{post.deadlineDate}</li>
                      <li>
                        <button onClick={() => deleteHandler(post._id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}



export default Tabs