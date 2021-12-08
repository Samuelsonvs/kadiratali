import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DatePicker, { setDefaultLocale } from "react-datepicker";

import { App } from "@/interfaces/app";
import { req } from "@/utils/request";
import dateResolver from "@/utils/dateResolver";
import SuccessAlert from "../alert";

const TodoForm = ({categories, setter}: App.Categories) => {
  const [isForm, setIsForm] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(new Date());
  setDefaultLocale("tr");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<App.FormValues>();

  const onSubmit: SubmitHandler<App.FormValues> = async (data) => {
    setIsAdded(false)
    const { tab, name, content } = data;
    const { entry } = await req({method:"POST", tab, name, content, deadline: startDate});
    if (entry) {
      const { tab, name, content, deadline, createdAt, _id } = entry
      const createDate = dateResolver(createdAt);
      const deadlineDate = dateResolver(deadline);
      setter({
        ...categories,
        [tab]: {...categories[tab],[_id]:{ _id, content, tab, name, createDate, deadlineDate}}
      })
      reset()
      setIsAdded(true)
    }
  };

  return (
    <>
      <div
        className="flex py-12 justify-center"
      >
        {!isForm ? (
          <button
            onClick={() => setIsForm(true)}
            className="matrix-btn py-2 flex justify-center text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-primary"
          >
            <div className="p-2 pr-0 flex justify-end">
              <select
                {...register("tab", { required: true })}
                className="custom-input px-3 py-2 border-2 border-primary focus:outline-none transition-colors bg-transparent cursor-pointer"
              >
                <option value="School">School</option>
                <option value="Nesine">Nesine</option>
                <option value="Bootcamp">Bootcamp</option>
              </select>
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <div className="flex justify-end">
              {errors?.tab && (
                <p className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>This is required</span>
                </p>
              )}
            </div>

            <div className="p-2 pr-0 flex justify-between">
              <label className="px-2">Name</label>
              <input
                className="custom-input border border-primary py-1 px-2"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex justify-end">
              {errors?.name && (
                <p className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>This is required</span>
                </p>
              )}
            </div>

            <div className="pt-2 pl-2 pb-4 flex justify-between">
              <label className="px-2">Content</label>
              <input
                className="custom-input border border-primary py-1 pl-2"
                {...register("content", { required: true })}
              />
            </div>
            <div className="flex justify-end">
              {errors?.content && (
                <p className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>This is required</span>
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <input className="matrix-btn" type="submit" value="Add" />
            </div>
            {isAdded && <SuccessAlert state={"add"}/>}
          </form>
        )}
      </div>
      </>
  );
};

export default TodoForm;
