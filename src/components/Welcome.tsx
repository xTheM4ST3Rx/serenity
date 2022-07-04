import { useState, useEffect } from "react";
import Profile from "../resources/profile.jpg";

export function Welcome() {
  const [loading, setLoading] = useState(100);

  //didMount
  useEffect(() => {
    var load = 100;
    const interval = setInterval(() => {
      setLoading((loading) => loading - 1);
      load = load - 1;

      console.log(load);
      if (load == 0) {
        clearInterval(interval);

        /* $( "#ProfileHome" ).slideUp();*/
      }
    }, 50);
  }, []);

  return (
    <>
      <div className="profileBg">
        <div className="profileItens">
          <div>
            <img src={Profile} alt="" className="profileImg" />
          </div>
          <div className="profileText">
            <div>
              <strong>Edinan C. Morais</strong>
            </div>
            <div>"Bem Vindo(a) ao meu perfil !"</div>
          </div>
        </div>

        <div
          style={{
            background: "gray",
            height: "5px",
            width: "100%",
            position: "absolute",
          }}
        >
          <div
            id={"barProgress"}
            style={{
              background: "#00fa0c",
              height: "5px",
              width: `${loading}%`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
