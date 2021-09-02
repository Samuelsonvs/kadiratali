import { useMemo } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from "@/lib/mdx";
import SnippetLayout from "@/components/layouts/SnippetLayout";
import Container from "@/container/Container";

const Slug = ({ code, frontMatter }:any) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <Component />
    </SnippetLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getFiles("Blog");
    return {
      paths: posts.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, ""),
        },
      })),
      fallback: false,
    };
  };
  
  export const getStaticProps: GetStaticProps = async (
    { params }: GetStaticPropsContext
  ) => {
    const slug = String(params?.slug);
    const post = await getFileBySlug("Blog", slug);

    return {
      props: { ...post },
    };
  };
  
  export default Slug;