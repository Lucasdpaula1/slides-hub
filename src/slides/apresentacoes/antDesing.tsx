import BaseSlide from "@/components/baseSlide/BaseSlide"
import { Heading } from "@chakra-ui/react"
import codeV5 from './assets/antV5-code.png'
import './style.css'

const AntDesingApresentationSlide = (

)=>{
    return   <BaseSlide >
     <section data-background-color="white">
        
            <Heading as="h2">Ant-design: A elegância tem um preço alto  </Heading>
          </section>
          <section><Heading as='h2'>
            O que iremos abordar?
            </Heading>
            <ul>
          <li className="fragment">O que é Ant desing</li>
          <li className="fragment">Qual sua relevância </li>
          <li className="fragment">
            Pontos positivos e negativos da utilização dele em projetos
          </li>
          <li className="fragment">
    pontos diferenciais em comparação com outras ferramentas
          </li>
          <li className="fragment">Qual o melhor cenário para sua aplicabilidade</li>
        </ul>
            </section>
            <section>
                <Heading>
                    O que é Ant desing
                </Heading>
            
                <li>Ant Design (ou Antd) é uma biblioteca de componentes UI React criada pela Alibaba.</li>
                <li>Foco principal: aplicações corporativas (enterprise-level apps)</li>
                <li>Segue os princípios do Design System e foi desenvolvida para fornecer uma interface de usuário consistente, elegante e eficiente.</li>


            </section>

            <section>
              <Heading>  Qual sua relevância </Heading>
              <li>integração com typescript</li>
              <li>produtividade</li>
              <li>Padronização visual</li>
              <li>consistência em sistemas grandes </li>
              </section>
              <section>
                <Heading>Pontos positivos e negativos v5</Heading>
                <li>implementações rápidas </li>
                <li>interface iterativa</li>
                <li>dependência do react</li>
                <li>otimizado</li>
                <li>limitações na identidade visual</li>
                <li>documentação em transição </li>
              </section>
              <section>
                <Heading>
                  comparativo
                </Heading>
                <table className="reveal">

    <thead>
      <tr>
        <th>pontos</th>
        <th>antv5</th>
        <th>bootstrap</th>
        <th>tailwind</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>dependencia</td>
        <td>sim</td>
        <td>não </td>
        <td>não</td>
      </tr>
      <tr>
        <td>flexibilidade de estilos</td>
        <td>complexa(baixa)</td>
        <td>media</td>
        <td>alta</td>
      </tr>
          <tr>
        <td>Design Pronto</td>
        <td>sim</td>
        <td>sim, estrutura genérica </td>
        <td>não, necessidade manual</td>
      </tr>
    </tbody>
                </table>

              </section>
              <section>
                <Heading as={"h2"}>
              melhor momento
                </Heading>
                <li>prazo de entrega muito curto</li>
                <li>desenvolvendo painéis com o âmbito coorporativo</li>
                <li>necessidade de um design moderno sem possuir uma equipe de designer</li>
              </section>
              <section className="section-image-antV5" >

    <img src={codeV5} alt="" className="antV5" />

              </section>

          
        </BaseSlide>
}
//  bundle é básicamente um arquivo final gerado a partir do meu código fonte e tal arquivo é repassado para o navegador com a combinação de todos
// os recursos necessários para a aplicação funcionar, ferramentas que realizam esse enpacotamento é o webpack , vite dentre outros
// no antv5 ele utiliza um sistema de tokens e css-in-js no qual os tokens são responsáveis por gerenciar os estilos de algumas propriedades enquanto 
// o css-in-js é basicamente que os estilos são injetados durante a renderização do componente, auxiliando o bundle do arquivo pois não carrega
// primeiramente esses estilos
export default AntDesingApresentationSlide