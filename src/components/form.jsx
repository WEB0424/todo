import "./form.css";

function Form() {
  return (
    <form className="newTask">
      <h2>Nueva tarea</h2>
      <label>Escribe la descripción de la tarea</label>
      <textarea></textarea>
      <label>Fecha límite</label>
      <input type="date" />
      <button>Insertar</button>
    </form>
  );
}

export default Form;
