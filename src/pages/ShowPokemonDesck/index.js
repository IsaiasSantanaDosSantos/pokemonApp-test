import { ShowPokemonDesckContainer } from "./style";
import closeImg from "../../img/closeIcon.png";
import pesoImg from "../../img/peso.png";
import reguaImg from "../../img/alturaImg.png";
import img from "../../img/bulbasaur.png";

const ShowPokemonDesck = ({ onClose = () => {} }) => {

  return (
    <ShowPokemonDesckContainer>
      <div className="showPokemonDesckTodoConteudo" onClick={onClose}>
        <div className="showPokemonDesckContainer">
          <div className="showPokemonDesckClosedBtn" onClick={onClose}>
            <img src={closeImg} alt="Botão fechar" />
          </div>
          <div className="showPokemonDesckConteudo">
            <div className="showPokemonDesckBoxImgDados">
              <div className="showPokemonDesckBoxImg">
                <img src={img} alt="Imagem" />
                <div className="showPokemonDesckBoxImgInfo">
                  <div className="showPokemonDesckBoxImgInfoPoder">
                    <p>Fogo</p>
                  </div>
                  <div className="showPokemonDesckBoxImgInfoAcao">
                    <p>Voador</p>
                  </div>
                </div>
              </div>
              <div className="showPokemonDesckBoxDados">
                <div className="showPokemonDesckHeader">
                  <h1>Nome</h1>
                  <p>Id</p>
                </div>
                <div className="showPokemonDesckInfo">
                  <p>
                    Charizard é um Pokémon bípede dracônico . É principalmente
                    laranja com uma parte inferior creme do peito até a ponta da
                    cauda.
                  </p>
                </div>
                <div className="showPokemonDesckPesoAlturaPoder">
                  <div className="showPokemonDesckPeso">
                    <div className="showPokemonDesckPesoInfo">
                      <img src={pesoImg} alt="Imagem balança" />
                      <p>90,5 kg</p>
                    </div>
                    <div className="showPokemonDesckSobrePeso">
                      <p>Peso</p>
                    </div>
                  </div>
                  <div className="showPokemonDesckAltura">
                    <div className="showPokemonDesckAlturaInfo">
                      <img src={reguaImg} alt="Imagem régua" />
                      <p>1,7 m</p>
                    </div>
                    <div className="showPokemonDesckSobreAltura">
                      <p>Altura</p>
                    </div>
                  </div>
                  <div className="showPokemonDesckPoder">
                    <div className="showPokemonDesckPoderInfo">
                      <p>Lança Chamas</p>
                    </div>
                    <div className="showPokemonDesckSobrePoder">
                      <p>Poder principal</p>
                    </div>
                  </div>
                </div>
                <div className="showPokemonDesckGraficos">
                  <div className="showPokemonDesckGraficoAtaque">
                    <div className="showPokemonDesckGraficoNome">
                      <p>Ataque</p>
                    </div>
                    <div className="showPokemonDesckGraficoNumero">
                      <p>84</p>
                    </div>
                    <div className="showPokemonDesckGraficoBarra">
                      <div className="showPokemonDesckGraficoBarraAtaque"></div>
                    </div>
                  </div>

                  <div className="showPokemonDesckGraficoDefesa">
                    <div className="showPokemonDesckGraficoNome">
                      <p>Defesa</p>
                    </div>
                    <div className="showPokemonDesckGraficoNumero">
                      <p>74</p>
                    </div>
                    <div className="showPokemonDesckGraficoBarra">
                      <div className="showPokemonDesckGraficoBarraDefesa"></div>
                    </div>
                  </div>

                  <div className="showPokemonDesckGraficoVlAtaque">
                    <div className="showPokemonDesckGraficoNome">
                      <p>Vl. Ataque</p>
                    </div>
                    <div className="showPokemonDesckGraficoNumero">
                      <p>109</p>
                    </div>
                    <div className="showPokemonDesckGraficoBarra">
                      <div className="showPokemonDesckGraficoBarraVlAtaque"></div>
                    </div>
                  </div>

                  <div className="showPokemonDesckGraficoVlTotal">
                    <div className="showPokemonDesckGraficoNome">
                      <p>Total</p>
                    </div>
                    <div className="showPokemonDesckGraficoNumero">
                      <p>271</p>
                    </div>
                    <div className="showPokemonDesckGraficoBarra">
                      <div className="showPokemonDesckGraficoBarraTotal"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowPokemonDesckContainer>
  );
};

export default ShowPokemonDesck;
