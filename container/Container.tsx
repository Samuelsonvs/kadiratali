import Head from "next/head";
import { useRouter } from "next/router";
import { ContainerProps } from "@/interfaces/interface";

export default function Container({
  children,
  customTitle,
}: ContainerProps): JSX.Element {
  const router = useRouter();
  const meta = {
    title: customTitle ? customTitle : "Kadir Atalı – Test Engineer",
    description: "Software test engineer.",
    image: "",
    type: "website",
    date: "02.02.02",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://kadiratali.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://kadiratali.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Kadir Atalı" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main>
        {children}
      </main>
      <footer>
      </footer>
    </div>
  );
}
