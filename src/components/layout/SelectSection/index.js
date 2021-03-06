import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState } from "react";
import { SelectSectionContainer } from "./style";

const SelectSection = () => {
  const [tipo, setTipo] = useState(false);
  const [ataque, setAtaque] = useState(false);
  const [defesa, setDefesa] = useState(false);

  const showTipo = () => setTipo(true);
  const hiderTipo = () => setTipo(false);
  const showAtaque = () => setAtaque(true);
  const hiderAtaque = () => setAtaque(false);
  const showDefesa = () => setDefesa(true);
  const hiderDefesa = () => setDefesa(false);

  return (
    <SelectSectionContainer>
      <div className="pokemonsGroupSelect">
        <div className="pkemonsSelectTipoCheckbox">
          <div name="tipo" className="pokemonsSelectTipo">
            <p>Tipo</p>
            {tipo ? (
              <KeyboardArrowUpOutlinedIcon
                onClick={hiderTipo}
                className="pokemonsIcons"
              ></KeyboardArrowUpOutlinedIcon>
            ) : (
              <KeyboardArrowDownOutlinedIcon
                onClick={showTipo}
                className="pokemonsIcons"
              ></KeyboardArrowDownOutlinedIcon>
            )}
          </div>
          {tipo ? (
            <div className="pokemonsCheckboxTipo">
              <input type="checkbox" name="tipo" value="Fogo" />
              {" Fogo"}
              <br />
              <input type="checkbox" name="tipo" value="Planta" />
              {" Planta "}
              <br />
              <input type="checkbox" name="tipo" value="Eletrico" />
              {" Eletrico "}
              <br />
              <input type="checkbox" name="tipo" value="Agua" />
              {" Água"}
              <br />
              <input type="checkbox" name="tipo" value="Normal" />
              {" Normal"}
            </div>
          ) : null}
        </div>

        <div className="pokemonsSelectTipoCheckbox">
          <div name="ataque" className="pokemonsSelectAtaque">
            <p>Ataque</p>
            {ataque ? (
              <KeyboardArrowUpOutlinedIcon
                onClick={hiderAtaque}
                className="pokemonsIcons"
              ></KeyboardArrowUpOutlinedIcon>
            ) : (
              <KeyboardArrowDownOutlinedIcon
                onClick={showAtaque}
                className="pokemonsIcons"
              ></KeyboardArrowDownOutlinedIcon>
            )}
          </div>
          {ataque ? (
            <div className="pokemonsCheckboxTipo">
              <input type="checkbox" name="ataque" value="Fogo" />
              {" Fogo"}
              <br />
              <input type="checkbox" name="ataque" value="Planta" />
              {" Planta "}
              <br />
              <input type="checkbox" name="ataque" value="Eletrico" />
              {" Eletrico "}
              <br />
              <input type="checkbox" name="ataque" value="Agua" />
              {" Água"}
              <br />
              <input type="checkbox" name="ataque" value="Normal" />
              {" Normal"}
            </div>
          ) : null}
        </div>

        <div className="pkemonsSelectTipoCheckbox">
          <div name="ataque" className="pokemonsSelectDefesa">
            <p>Defesa</p>
            {defesa ? (
              <KeyboardArrowUpOutlinedIcon
                onClick={hiderDefesa}
                className="pokemonsIcons"
              ></KeyboardArrowUpOutlinedIcon>
            ) : (
              <KeyboardArrowDownOutlinedIcon
                onClick={showDefesa}
                className="pokemonsIcons"
              ></KeyboardArrowDownOutlinedIcon>
            )}
          </div>
          {defesa ? (
            <div className="pokemonsCheckboxTipo">
              <input type="checkbox" name="defesa" value="Fogo" />
              {" Fogo"}
              <br />
              <input type="checkbox" name="defesa" value="Planta" />
              {" Planta "}
              <br />
              <input type="checkbox" name="defesa" value="Eletrico" />
              {" Eletrico "}
              <br />
              <input type="checkbox" name="defesa" value="Agua" />
              {" Água"}
              <br />
              <input type="checkbox" name="defesa" value="Normal" />
              {" Normal"}
            </div>
          ) : null}
        </div>
      </div>
    </SelectSectionContainer>
  );
};

export default SelectSection;
