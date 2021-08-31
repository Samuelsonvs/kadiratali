import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from 'react';
import { ContainerProps } from "@/interfaces/interface";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

interface drp {
  [key:number]: number,
  length: number
}

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

  const canvaRef = useRef<HTMLCanvasElement>(null);
  const canvaWakeUp = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvaRef.current) {
      const context = canvaRef.current.getContext('2d');
      if (context) {
        const contextWidth = canvaRef.current.width = screen.width;
        const contextHeight = canvaRef.current.height = screen.height;
        const letters = '00010101010 1001010 100101010010 1001010101 0100 101010101001 010 101010101010';
        const splitLetters = letters.split('');
        const fontSize = 10;
        const columns = contextWidth / fontSize;
        let drops:drp = [];
        for (let i = 0; i < columns; i++) {
          drops[i] = 1;
        };
        const draw = () =>  {
          context.fillStyle = 'rgba(0, 0, 0, .1)';
          context.fillRect(0, 0, contextWidth, contextHeight);
          for (let i = 0; i < drops.length; i++) {
            const text = splitLetters[Math.floor(Math.random() * splitLetters.length)];
            context.fillStyle = '#0f0';
            context.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > contextHeight && Math.random() > .95) {
              drops[i] = 0;
            }
          }
        };
        const interval = setInterval(draw, 50);
        return () => clearInterval(interval);
      }
    }
  }, [canvaRef])

  useEffect(() => {
    if (canvaWakeUp.current) {
      const context = canvaWakeUp.current.getContext('2d');
      if (context) {
        const contextWidth = canvaWakeUp.current.width = screen.width;
        const contextHeight = canvaWakeUp.current.height = 75;
        context.font = 'normal 20px monospace';
        context.textAlign = 'left';
        context.textBaseline = 'top';
        context.fillStyle = '#3f3';
        context.strokeStyle = 'rgba(0, 0, 0, .3)';
        context.shadowColor = '#3f3';

        const messageString = 'Wake up, Kadir...';
        const messageArray = messageString.split('');
        const messageLength = messageArray.length;
        let pointer = 0;
        let typeTick = 0;
        const typeTickMax = 5;
        let typeResetTick = 0;
        const typeResetMax = 140;

        const updateTypeTick = function(){
          if(pointer < messageLength){
            if(typeTick < typeTickMax){
              typeTick++;
            } else {
              typeTick = 0;
              pointer++;
            }
          } else {
            if(typeResetTick < typeResetMax){
              typeResetTick++;
            } else {
              typeResetTick = 0;
              typeTick = 0;
              pointer = 0;
            }
          }
        }

        const renderMessage = function(){
          const text = messageArray.slice(0, pointer);
          context.shadowBlur = 6;
          context.fillText(text.join(''), 20, 20);
          context.shadowBlur = 0;
        }

        const renderLines = function(){
          context.beginPath();
          for(let i = 0; i < contextHeight/2; i += 1){    
            context.moveTo(0, (i*2) + .5);
            context.lineTo(contextWidth, (i*2) + .5);   
          }
          context.stroke();
        }

        const loop = function(){
          context.clearRect(0, 0, contextWidth, contextHeight);
          updateTypeTick();
          renderMessage();
          renderLines();
          const timeout = setTimeout(loop, 16);
          return () => clearTimeout(timeout);
        }

        loop();
      }
    }
  }, [canvaWakeUp])

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
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <meta property="og:site_name" content="Kadir Atalı" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="">
        <canvas
          ref={canvaRef}
          className="matrix-bg">
        </canvas>
        <canvas
          ref={canvaWakeUp}
          className="wakeup"
        >
        </canvas>
        <div className="temp">
          <div className="nav-main-container">
            <Navbar />
            <main>
              <div>
                  {children}
              </div>
            </main>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
