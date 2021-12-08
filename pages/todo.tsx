import Container from "@/container/Container";
import React from "react";

import Tabs from "@/components/Todo/Tabs";

const Todo = () => {
  return (
    <Container>
      <div className="max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl text-center md:text-5xl tracking-tight mb-4 text-primary">
          Simulacra and Simulation
        </h1>
        <div>
          <Tabs />
        </div>
        <div className="text-primary"></div>
      </div>
    </Container>
  );
};

export default Todo;
