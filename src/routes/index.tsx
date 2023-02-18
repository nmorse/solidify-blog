import { Title, A } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Techable Blog</Title>
      <h1>Techable Blog</h1>
      <h2>helping put some "able" in technical projects</h2>
      <p>
        Here are some minor wins in becoming more able to have fun and 
        succeed with some hardware and software projects.
      </p>
      <p>
        Read, do, have Fun, change something, write, Repeat:
      </p>
      <p>
      <A href="/project/blinky-state">basic blinking, but with a state machine</A>
      </p>
      <p>
      WHat only one! (at a time), (quality over quantity :) )
      </p>
    </main>
  );
}
