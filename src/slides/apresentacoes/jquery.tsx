import BaseSlide from "@/components/baseSlide/BaseSlide";
import { Heading } from "@chakra-ui/react";
import dogsClab from "./assets/dogs-clap.gif";

const JQueryApresentationSlide = () => {
  return (
    <BaseSlide>
      <section data-background-color="white">
        <Heading as="h2">JQuery: o futuro do passado</Heading>
      </section>
      <section data-background-color="white">
        <Heading as="h3">
          Me senti um gênio escrevendo esse título, então... aplausos
        </Heading>

        <div className="flex items-center justify-center">
          <img src={dogsClab} alt="" />
        </div>
      </section>
      <section data-background-color="white">
        <Heading as="h3">Indo para o que importa...</Heading>
        <Heading as="h4">O que veremos hoje?</Heading>
        <ul>
          <li className="fragment">O que é JQuery</li>
          <li className="fragment">Qual foi sua importância</li>
          <li className="fragment">
            Pontos positivos e negativos da utilização dele em projetos antigos
            e atuais
          </li>
          <li className="fragment">Aplicação no clube do vinho</li>
        </ul>
      </section>
      <section>
        <Heading as="h3">O que é JQuery?</Heading>
        <p>
          "jQuery is a fast, small, and feature-rich JavaScript library. It
          makes things like HTML document traversal and manipulation, event
          handling, animation, and Ajax much simpler with an easy-to-use API
          that works across a multitude of browsers. With a combination of
          versatility and extensibility, jQuery has changed the way that
          millions of people write JavaScript."
        </p>
      </section>
      <section data-background-color="white">
        <Heading as="h2">Ou Seja</Heading>
        <Heading as="h3">Ele melhorava: </Heading>
        <ul>
          <li className="fragment">Integração entre diferentes navegadores</li>
          <li className="fragment">Manipulação de elementos do DOM</li>
          <li className="fragment">
            Manipulação de classes, atributos, estilos e contêudo
          </li>
          <li className="fragment">Criação de animações simples</li>
          <li className="fragment">
            Fazer requisições <span className="underline">AJAX</span>
          </li>
        </ul>
      </section>
      <section data-background-color="white">
        <Heading as="h2">AJAX</Heading>
        <p>Asynchronous JavaScript XML</p>
        <li className="fragment">
          Entregar o controle das requisições HTTP para o JavaScript
        </li>
        <div className="flex gap-5">
          <pre>
            <code data-line-numbers className="language-JavaScript">
              const b = 2
            </code>
          </pre>
          <pre>
            <code data-line-numbers className="language-JavaScript">
              var b = 2
            </code>
          </pre>
        </div>
      </section>
    </BaseSlide>
  );
};

export default JQueryApresentationSlide;
