import Container from "@/container/Container";

export default function SnippetLayout({ children, frontMatter }: any) {
  return (
    <Container>
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-primary">
              {frontMatter.title}
            </h1>
            <p className="text-primary">{frontMatter.description}</p>
          </div>
          <div className="mt-2 sm:mt-0"></div>
        </div>
        <div className="prose w-full max-w-none">{children}</div>
        {/* form created */}
      </article>
    </Container>
  );
}
