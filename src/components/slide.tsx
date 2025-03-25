// App.tsx
import React from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

export function Slide() {
  const deckDivRef = React.useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = React.useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  React.useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    if (deckDivRef.current) {
      deckRef.current = new Reveal(deckDivRef.current, {
        transition: "slide",
        // other config options
      });
      deckRef.current.initialize().then(() => {
        // good place for event handlers and plugin setups
      });
    }

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.log(e);
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          aoidhoasiuhdasioudui9oasdhasuio9dias asoidhuiopsadas aodkashpiudas
        </section>
        <section>Slide 2</section>
      </div>
    </div>
  );
}
