import { useEffect, useRef } from "react";

import { App } from "@/interfaces/app";

const TextLayout = ({ text, underscore }: App.TextLayoutType) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const underscoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const con = underscoreRef.current;
    const target = textRef.current;
    if (con && target) {
      target.innerHTML = text;
      const consoleText = (words: string, underscore: boolean) => {
        if (!underscore) {
          con.className = "console-underscore hidden";
        }
        let letterCount = 1;
        let visible = true;
        window.setInterval(function () {
          if (letterCount !== words.length + 1) {
            target.innerHTML = words.substring(0, letterCount);
            letterCount += 1;
          }
        }, 10);
        if (underscore) {
          window.setInterval(function () {
            if (visible === true) {
              con.className = "console-underscore hidden";
              visible = false;
            } else {
              con.className = "console-underscore";
              visible = true;
            }
          }, 400);
        }
      };
      consoleText(text, underscore);
    }
  }, [textRef, underscoreRef, text, underscore]);
  return (
    <div className="console-container pr-0 sm:pr-2">
      <span ref={textRef} id="text"></span>
      <div ref={underscoreRef} className="console-underscore" id="console">
        &#95;
      </div>
    </div>
  );
};

export default TextLayout;
