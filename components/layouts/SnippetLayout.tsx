import Container from "@/container/Container";
import { useRouter } from "next/router";

export default function SnippetLayout({ children, frontMatter }:any) {
  return (
    <Container
    >
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {frontMatter.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {frontMatter.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0"></div>
        </div>
        <div className="prose dark:prose-dark w-full dark:text-gray-200 max-w-none">
          {children}
        </div>
        {/* form created */}
      </article>
    </Container>
  );
}
