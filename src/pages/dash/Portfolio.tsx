import { useEffect } from "react";

import Profile from "../../resources/profile.jpg";
import Nuvem from "../../resources/nuvem.jpg";
import Wssocket from "../../resources/wss.png";
import DiscordLogo from "../../resources/discord.svg";
import bg1 from "../../resources/bg1.jpg";
import bg2 from "../../resources/bg2.png";
import bg3 from "../../resources/bg3.png";
import bg4 from "../../resources/bg4.png";

export function Portfolio() {
  useEffect(() => {
    const scroller = document.getElementById("scroller");
    scroller?.addEventListener("scroll", function () {
      var bg = document.getElementById("bg") as HTMLElement;
      var moon = document.getElementById("moon") as HTMLElement;
      var mountain = document.getElementById("mountain") as HTMLElement;
      var road = document.getElementById("road") as HTMLElement;

      var value = scroller.scrollTop;

      bg.style.top = value * 0.5 + "px";
      moon.style.left = -value * 0.5 + "px";
      mountain.style.top = -value * 0.15 + "px";
      road.style.top = value * 0.15 + "px";
    });
  }, []);

  return (
    <div>
      <section>
        <img src={bg1} id="bg" />
        <img src={bg2} id="moon" />
        <img src={bg3} id="mountain" />
        <img src={bg4} id="road" />
      </section>

      <div className="container my-10">
        <div className="row p-3 mx-0 my-5 l text-center">
          <div className="col">
            <img
              id="imgPresentation"
              src={Profile}
              alt="profile"
              width="200px"
              className="rd-100"
            />
            <div>
              <strong>FullStack Developer</strong>
            </div>
            <div className="mt-2">Edinan C. Morais</div>
            <div>24 Anos</div>
            <div className="mt-3">"Olá Bem vindo(a) ao meu perfil"</div>
          </div>
          <div className="col align-self-center">
            <h1>Projects</h1>
            <h1>4</h1>
          </div>
          <div className="col align-self-center">
            <h1>Repositories</h1>
            <h1>8</h1>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="row p-3 mx-0 my-5">
          <div className="col">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Front-End
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>
            <div className="mt-3">
              <div>Html</div>
              <div>Css</div>
              <div>Javascript</div>
              <div>Typescript</div>
              <div>ReactJs</div>
              <div>ReactNative</div>
            </div>
          </div>
          <div className="col">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Back-End
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>
            <div className="mt-3">
              <div>Nodejs</div>
              <div>PHP</div>
              <div>MongoDB</div>
              <div>MySql</div>
              <div>Data Science</div>
              <div>Machine Learning</div>
            </div>
          </div>
          <div className="col">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Versionamento
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>
            <div className="mt-3">
              <div>GitHub</div>
              <div>Bitbucket</div>
              <div>Método de GitFlow</div>
            </div>
          </div>
          <div className="col">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Hard Skills
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>
            <div className="mt-3">
              <div>Ciência da Computação</div>
            </div>
          </div>
          <div className="col">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Soft Skills
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>
            <div className="mt-3">
              <div>Criatividade</div>
              <div>Proatividade</div>
              <div>Adaptabilidade</div>
              <div>Inteligência emocional</div>
              <div>Colaboração</div>
              <div>Pensamento Crítico</div>
              <div>Aprender a aprender</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="row p-3 mx-0 mt-5">
          <div className="col align-self-center">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Comunicação RealTime
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>

            <div className="mt-3">
              <div>
                Com o passar do tempo eu sempre tive curiosidade em saber como
                funcionava a tecnologia <b>RealTime</b>, foi então que surgiu a
                necessidade dos meus projetos onde foi utilizado o protocolo de{" "}
                <b>WebSockets</b> onde usei algumas interações e estou
                utilizando nesse momento.
              </div>
              <div className="mt-3">
                <div>- Usuários Online</div>
                <div>- Chats de mensagens</div>
              </div>
            </div>
          </div>

          <div className="col p-4">
            <img
              src={Wssocket}
              alt=""
              className="img-fluid"
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="row p-3 mx-0 my-5">
          <div className="col p-4">
            <img
              src={Nuvem}
              alt=""
              className="img-fluid"
              style={{ borderRadius: 10 }}
            />
          </div>

          <div className="col align-self-center">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Armazenamento em Nuvem
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>

            <div className="mt-3">
              <p>
                Atualmente as grandes empresa estão migrando seus dados para
                nuvem. Assim dispensando os custos de servidores locais e
                manutenção.
              </p>
              <p>
                Em alguns projetos utilizei muitos serviços da Microsoft Azure
                como:
              </p>
              <div className="mt-3">
                <div>- Storage</div>
                <div>- Mídia Services</div>
                <div>- Encoder</div>
                <div>- CosmosDB</div>
                <div>- SendGrid</div>
                <div>- CDN</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="row p-3 mx-0 my-5">
          <div className="col align-self-center">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Sistemas de Pagamentos
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>

            <div className="mt-3">
              <p>
                Trabalhar com pagamentos no inicio parecia algo muito
                assustador, pois eu sempre tinha duvidas de onde irei salvar
                informações com dados de cartões tão delicados foi ai que
                conheci a IUGU, até visitei a empresa em São Paulo.
              </p>
              <p>
                Utilizando a IUGU e possivel cria varios fluxos de pagamentos ,
                tanto para Assinantes ou montar um E-Commerce com vendedores com
                subcontas.
              </p>
              <div className="mt-3">
                <div>- Cobrança direta</div>
                <div>- Assinaturas com cobrança recorrente</div>
                <div>- Transferências entre subcontas</div>
                <div>- Gerenciamento de pagamentos</div>
              </div>
            </div>
          </div>

          <div className="col p-4">
            <img
              src=" https://files.readme.io/73d82c9-cobranca_recorrente_1.jpg"
              alt=""
              className="img-fluid"
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="row p-3 mx-0 my-5">
          <div className="col">
            <div
              style={{ fontWeight: "bold", fontSize: "25px", color: "white" }}
            >
              Contato
            </div>
            <div
              style={{
                background: "#00c742",
                height: "5px",
                width: "25px",
                borderRadius: 10,
              }}
            ></div>
            <div className="mt-3">
              <div>Email: them4sterdeveloper@outlook.com</div>
              <div>Phone: +55 11 975909929</div>
            </div>
          </div>
          <div className="col">
            <img src={DiscordLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
