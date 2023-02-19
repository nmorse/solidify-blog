import { A, Title } from "solid-start";

export default function Blinky() {
  return (
    <main>
      <Title>Blinky State</Title>
      <h1>Blinky in Two States</h1>
      <h2>Using a statemachine to blink an LED on a Micro-controller</h2>
      <p>
        Why complicate this?
        Blinking an LED is the simplest of all the projects, considered the most basic project
        a beginner should try, before all others.
        It Should be simple, <em>except</em>, the typical code offered up is a terrible way to
        start learning.
        It sets a bad example that leads a beginner down a
        'Procedural' path of coding. Programming the micro-controller with 'step by step'
        instructions is a style of programming that makes sense for simple projects, but
        does not scale to even a modestly more complex projects.
      </p>
      <p>
        So yes, there are simpler blinky tutorials and this one will be a little more complex,
        but it will lead to a 'Declarative' way of coding and this starter code
        will scale, as your next project gets more ambitious.
      </p>
      <p>
        Introducing two methods used to manage complexity in a larger project, but you don't have to be an expert try them:
      </p>
      <ul>
        <li> cooperative multi-tasking in the form of circuitpython's asyncio</li>
        <li> and the use of a statemachine, (in our case) using xState and their new visual environment, stately.ai</li>
      </ul>
      <p>
        "Why" use these two old techniques in a modern micro-controller is the subject of a separate article <A href="/projects/asyncio-and-statemachine">the merits of asyncio and statemachines</A>,
        but here we moving forward, to get to the "blinking."
      </p>
      <hr />
      <p>
        Here are the hardware ingredients:
      </p>
      <ul>
        <li>a (newer) micro-controller <a href="https://circuitpython.org/downloads?q=asyncio" target="_blank">board that can run asyncio </a> (one that has some kind of LED for blinking)
        </li>
        <li>and a USB cord to connect it to your computer
        </li>
      </ul>
      <hr />
      <p>
        Load some software: The nice thing is that it can all be done via a (data capable *) USB cable.
        First we need circuitpython version 8 or greater. and some additional libraries
        to help asyncio work.

        then load the project from this git repo ... and it should work for these boards:



        (other boards from the link above "board[s] that can run asyncio" should also work with a few minor changes)
      </p>
      <p>
      </p>
      <p class="footnote">
        * If you are not seeing a USB removable drive show in you file browser, then one thing to check on, is that your USB cable is not the kind that only is capable of charging and has no data wires connected :(
        ... you will need on that can transfer data :)
      </p>
    </main>
  );
}
