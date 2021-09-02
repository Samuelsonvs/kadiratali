import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, useFieldArray, Controller } from "react-hook-form";

interface FormInputs {
  [key: string]: string;
  command: string;
}

interface navListType {
  [key: string]: string;
}

const navList: navListType = {
  home: "/",
  blog: "/blog",
  help: "/help",
  projects: "/projects",
  1: "/blog/use-async",
  2: "/blog/use-persisted-state",
};

const Navbar = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    // Read the formState before render to subscribe the form state through Proxy
    formState: {
      errors,
      isDirty,
      isSubmitSuccessful,
      touchedFields,
      submitCount,
    },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    const content = data.command.toLowerCase();
    if (navList[content]) {
      router.push(`${navList[content]}`);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ command: "" });
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="max-w-4xl text-green-300 font-mono">
      <form
        className="flex flex-col sm:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="command-line"
          placeholder="Type 'help' for command list."
          autoComplete="off"
          autoFocus={true}
          {...register("command")}
        />
        <input
          className="command-line-button mt-3 sm:mt-0"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default Navbar;
