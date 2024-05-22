import "./item.css";

function Item(props) {
  console.log(props.title);
  if (props.status == "in_progress") {
    var text_status = "En progreso";
  }
  if (props.status == "pending") {
    var text_status = "Pendiente";
  }
  if (props.status == "done") {
    var text_status = "Finalizada";
  }

  var now = new Date();
  console.log(now);
  var remaining = new Date(props.dueDate) - new Date();
  remaining = remaining / 1000 / 60 / 60 / 24;
  remaining = Math.round(remaining);

  if (remaining > 0) {
    var remaining_text = "(Faltan " + remaining + " días)";
  } else {
    var remaining_text = "(Pasan " + -remaining + " días)";
  }

  return (
    <div className="item">
      <p>{props.title}</p>
      <p>
        <span className={props.status}>{text_status}</span> Fecha límite:
        {props.dueDate} {remaining_text}
      </p>
      <p>
        <a href="">Editar</a>
        <a href="">Marcar como finalizada</a>
        <a href="" className="delete">
          Eliminar
        </a>
      </p>
    </div>
  );
}

export default Item;
