import { Conteiner } from "../styles/form";

function Form() {
  return (
    <Conteiner>
      <form>
        <div>
          <input name="status" type="radio" id="statusPen"/>
          <label for= "statusPen"> Pendente </label>
        </div>
        <div>
          <input name="status" type="radio" id="statusAnd"/>
          <label for= "statusAnd"> Em Andamento </label>
        </div>
        <div>
          <input name="status" type="radio" id="statusPron"/>
          <label for= "statusPron"> Pronto </label>
        </div>
        
      </form>
    </Conteiner>
  );
}

export default Form;
