import { A, Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Blinky State</Title>
      <h1>Blinky done with Two States</h1>
      <h2>The "Hello World!" of Micro-controllers coded with a Statemachine</h2>
      <p>
        This project is a simple one that demonstraits a slightly complicated way to acheve a simple blinking LED.
        Why complicate this? It sets up some really nice methods for managing more complex projects in a simpler way.
        Here is the thing, there are simpler blinky toutorials, but the methods they use will not scale, instead here we set you up for success in your next project.
      </p>
      <p>
        So, here let's introduce (in a simple way) two advanced methods used to controle complexity in a larger project:
        <ul>
          <li> cooperative multi-tasking in the form of circuitpython's asyncio</li>
          <li> and the use of a statemachine, using xState and their new visual environment, stately.ai</li>
        </ul>
        "Why" use these two old techniques in a modern microcontroller is the subject of a separate artcle <A href="./asyncio-and-statemachine">the merrits of asyncio and statemachines</A>,
        but here we moving forward, to get to the "blinking."  
        </p>
      <p>
        <hr />
        Here are the hardware ingredients:
        <ul>
          <li>a (newer) micro-controller <a href="https://circuitpython.org/downloads?q=asyncio" target="new">board that can run asyncio </a> (one that has some kind of LED for blinking)
          </li>
          <li>and a USB cord to connect it to your computer
          </li>
        </ul>
        <hr />
      </p>
      <p>
        Next we need to load some software: The nice thing is that we can do this all via a USB cable.
        First we need circuitpython version 8 or greater. and some additional libraries 
        to help asyncio work.

        then load the project from this git repo ... and it should work for these boards:


        
        (other boards from the link above "board[s] that can run asyncio" should also work with a few minor changes)
      </p>
      <p>
      </p>
      <p>
      </p>
    </main>
  );
}
