import TextLayout from "@/components/layouts/TextLayout";
import Container from "@/container/Container";
import type { NextPage } from "next";

const commandList = [
  "HELP:   Command list.",
  "HOME:   Landing page.",
  "BLOG:   Articles page.",
];

const Help: NextPage = () => {
  return (
    <Container>
      <div>
        <div className="text-green-300 font-mono max-w-3xl mx-auto">
          <TextLayout text={commandList[0]} underscore={false} />
          <TextLayout text={commandList[1]} underscore={false} />
          <TextLayout text={commandList[2]} underscore={true} />
        </div>
      </div>
    </Container>
  );
};

export default Help;
