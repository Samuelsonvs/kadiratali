import TextLayout from '@/components/layouts/TextLayout';
import Container from '@/container/Container';
import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPropsContext } from "next";
import { getAllFilesFrontMatter } from "@/lib/mdx";


const Blog: NextPage = ({posts}: any) => {
  const len = posts.length;
  const text = "Blog In molestie blandit est a lobortis. Etiam risus ligula, aliquet at turpis ac, vulputate semper nisl. In nec mi id justo congue sollicitudin sed eu metus. Pellentesque maximus ut quam at consequat. Aliquam malesuada mauris in finibus auctor. Donec venenatis lectus sit amet condimentum mattis"
    return (
      <Container>
        <div>
          <div className="text-green-300 font-mono">
            {posts.map((s:any, idx:number) => {
              return (
                <TextLayout key={idx} text={s.description} underscore={len-1 === idx ? true : false} />
              )
            })}
          </div>
        </div>
    </Container>
      )
}

export default Blog

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const posts = await getAllFilesFrontMatter("Blog");

  return { props: { posts } };
};