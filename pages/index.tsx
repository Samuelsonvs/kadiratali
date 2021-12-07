import TextLayout from "@/components/layouts/TextLayout";
import Container from "@/container/Container";
import type { NextPage } from "next";

const text =
  "Home Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque, orci sed efficitur imperdiet, risus mi molestie urna, nec laoreet ipsum magna sed eros. Phasellus nec euismod augue. Vivamus mattis efficitur dui a posuere. Maecenas at leo quis tortor pellentesque tincidunt quis a velit. Phasellus vestibulum risus et euismod suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam mollis mollis leo vitae consectetur. Aliquam erat volutpat.";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="text-green-300 font-mono max-w-3xl mx-auto">
        <TextLayout text={text} underscore={true} />
      </div>
    </Container>
  );
};

export default Home;
