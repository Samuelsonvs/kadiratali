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
  const canvaWakeUp = useRef<HTMLCanvasElement>(null);

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
        for (let i = 0; i < columns; i++) {
          drops[i] = 1;
        };
        const draw = () =>  {
          context.fillStyle = 'rgba(0, 0, 0, .1)';
          context.fillRect(0, 0, Number(canvaRef?.current?.width), Number(canvaRef?.current?.height));
          for (let i = 0; i < drops.length; i++) {
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

  useEffect(() => {
    if (canvaWakeUp.current) {
      const context = canvaWakeUp.current.getContext('2d');
      if (context) {
        const contextWidth = canvaWakeUp.current.width = 400;
        const contextHeight = canvaWakeUp.current.height = 200;
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
          setTimeout(loop, 16);
        }

        loop();
      }
    }
  }, [canvaWakeUp])
    return (
      <Container>
        <div>
          <canvas
            ref={canvaRef}
            className="block opacity-20">
          </canvas>
          <canvas
            ref={canvaWakeUp}
            className="absolute top-0"
          >
          </canvas>
          {/* <div className="absolute z-20 text-white text-[3rem] contrast-150 top-0">
            KAdir
          </div> */}
        </div>
    </Container>
      )
}

export default Home
