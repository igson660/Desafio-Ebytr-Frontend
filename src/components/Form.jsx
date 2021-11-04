function Form() {
  return (
    <form>
      <fieldset>

      <legend>Status</legend>

      <input name="status" type="radio" id="statusPen"/>
      <label for= "statusPen"> Pendente: </label>

      <input name="status" type="radio" id="statusAnd"/>
      <label for= "statusAnd"> Em Andamento: </label>

      <input name="status" type="radio" id="statusPron"/>
      <label for= "statusPron"> Pronto: </label>
      
      </fieldset>
    </form>
  );
}

export default Form;
