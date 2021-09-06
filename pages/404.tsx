import Link from "next/link";

import Container from "@/container/Container";

export default function NotFound() {
  return (
    <Container customTitle={"404 – Kadir Atalı"}>
      <div className="flex flex-col justify-center items-start max-w-2xl text-primary mx-auto mb-16">
        <div className="font-bold text-3xl md:text-5xl mb-4">
          <h1 className="leading-snug">
            A glitch has occured
          </h1>
          <h1>
            [code: 404]
          </h1>
        </div>
        <div className="leading-8">
          <p>
            <b>Boy</b>: Do not try and bend the website. That&#039;s impossible. Instead... only try to realize the truth. 
            <br />
            <b>Neo</b>: What truth? 
            <br />
            <b>Boy</b>: There is no page. 
            <br />
            <b>Neo</b>: There is no page? 
            <br />
            <b>Boy</b>: Then you&#039;ll see, that it is not the website that bends, it is only yourself.
          </p>
        </div>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mt-10 mx-auto bg-opacity-0 text-center text-primary border-2 border-primary border-opacity-50">
            Return Home
          </a>
        </Link>  
      </div>
    </Container>
  );
}
