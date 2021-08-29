import Container from '@/container/Container';
import type { NextPage } from 'next';
import Image from "next/image";

const Home: NextPage = () => {
    return (
      <Container>
        {/* <Image
        className="min-w-full min-h-full object-cover fixed right-0 bottom-0"
        src="/static/gif/U1c.gif"
        alt="matrix"
        layout="fill"

         /> */}
        <video
            className="min-w-full min-h-full object-cover fixed right-0 bottom-0"
            controls={false}
            autoPlay={true}
            loop
            muted
            >
          <source src="/static/gif/matrix.mp4" type="video/mp4"/>
        </video>
    </Container>
      )
}

export default Home
