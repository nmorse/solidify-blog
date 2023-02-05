import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Blinky State</Title>
      <h1>A Reunion of New and Old Tech</h1>
      <h2>Mixing new micro-controllers with old software techniques</h2>
      <p>
        The microcontoller and 'makers' have had such a successful run,
        with breakout boards that keep beginners from making bad mistatkes
        to code libraies that tame complex hardware into accessable,
        effective electronics.
        Eight bit processors have been all but replaced by super-capable 32 bit,
        multi core systems at the same price and size. A few meta-makers
        of these breakout boards are keeping up with the times in setting up
        easy to use libraries in accessable languages.
      </p>
      <p>
        <hr />
        Two great suppliers (meta-makers) are:
        <ul>
          <li><a href="https://adafruit.com/" target="new">Adafruit</a> hardware with their well supported Circuitpython software
            have mapped out a path for maker success!
            Smoothing out the leaning curve keeps makers successful and
            teaches annalog and digital electronics allong the way.
          </li>
          <li>and <a href="https://sparkfun.com/" target="new">Sparkfun</a> also makes high quality boards.
          </li>
        </ul>
        Lots of others good providers, but these IMHO are Great!
        <hr />
      </p>
      <p>
        All this capability is the new magic carpet, but before we go for a
        ride, how can we tell our microcontroller what we want it to do?
        The common way, especially for beginners is to write step by step
        instructions. For simple projects this is straight forward, so you might
        think that is the best approach to give someone, just starting out, a short
        path to success.
        Could there be any down-side? Well, yes, as beginners find success and want to move
        on to intermediate projects, the step by step instruction method quickly becomes
        untenable. Computer Scientists call this style of instruction 'Procedural' programming.
      </p>
      <p>

        We want to try out a differnet approach. 'Declaritive' programming takes a
        different tact, where we tell the microcontroller "what" we want it to do and less
        of "how exactly" to do it.
        Ok, that is maybe too abstract, but put another way, if we tell it how to respond to situations
        we avoid many pitfalls of telling it every exacting step one after the next.
        <hr />
        Declarative contrasts with Procedural programming (which merely acts, rather than reacts)
        <hr />
        So we will be declaring the behavior we want, and to do this, we'll use a wonderfull
        thing called a 'State Machine.' We'll define the "States" that are usefull and what "Events"
        should cause it to change states. There is so much written about the use of state machines
        in programming* and it might feel as if we are jumping in to the deep end of the pool,
        but our use will be as basic as it gets and 'State Machines' are naturally intuitive. Also
        we will be using a visual representation that can help you see how they work.
      </p>
      <p>

        The project is the "hello world!" of microcontrollers, the blinking LED.
        but wait, 

      </p>
    </main>
  );
}
