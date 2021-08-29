import Container from '@/container/Container';
import type { NextPage } from 'next';
import Image from "next/image";
import { useEffect, useRef } from 'react';

interface drp {
  [key:number]: number,
  length: number
}

const Home: NextPage = () => {
  const canvaRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvaRef.current) {
      const context = canvaRef.current.getContext('2d');
      if (context) {
        canvaRef.current.width = window.innerWidth;
        canvaRef.current.height = window.innerHeight;
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
        const splitLetters = letters.split('');
        const fontSize = 10;
        const columns = canvaRef.current.width / fontSize;
        let drops:drp = [];
        for (var i = 0; i < columns; i++) {
          drops[i] = 1;
        };
        const draw = () =>  {
          context.fillStyle = 'rgba(0, 0, 0, .1)';
          context.fillRect(0, 0, Number(canvaRef?.current?.width), Number(canvaRef?.current?.height));
          for (var i = 0; i < drops.length; i++) {
            const text = splitLetters[Math.floor(Math.random() * splitLetters.length)];
            context.fillStyle = '#0f0';
            context.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > Number(canvaRef?.current?.height) && Math.random() > .95) {
              drops[i] = 0;
            }
          }
        };
        setInterval(draw, 50);
          
      }
    }
  }, [canvaRef])
    return (
      <Container>
        {/* <Image
        className="min-w-full min-h-full object-cover fixed right-0 bottom-0"
        src="/static/gif/U1c.gif"
        alt="matrix"
        layout="fill"

         /> */}
        {/* <video
            className="min-w-full min-h-full object-cover fixed right-0 bottom-0"
            controls={false}
            autoPlay={true}
            loop
            muted
            >
          <source src="/static/gif/matrix.mp4" type="video/mp4"/>
        </video> */}
        <canvas
        ref={canvaRef}
        className="block">
        </canvas>
    </Container>
      )
}

export default Home
