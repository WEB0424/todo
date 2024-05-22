import Item from "./item";

function List() {
  var tasks = [
    {
      title: "Preparar la clase",
      status: "in_progress",
      dueDate: "2024/06/13",
    },
    {
      title: "Devolver libros a la biblioteca",
      status: "pending",
      dueDate: "2024/07/09",
    },
    {
      title: "Preparar viaje a Marte",
      status: "pending",
      dueDate: "2027/03/26",
    },
    {
      title: "Hacer la declaración de la renta",
      status: "done",
      dueDate: "2024/05/10",
    },
    {
      title: "Preparar la clase",
      status: "in_progress",
      dueDate: "2024/06/13",
    },
    {
      title: "Devolver libros a la biblioteca",
      status: "pending",
      dueDate: "2024/07/09",
    },
    {
      title: "Preparar viaje a Marte",
      status: "pending",
      dueDate: "2027/03/26",
    },
    {
      title: "Hacer la declaración de la renta",
      status: "done",
      dueDate: "2024/05/10",
    },
  ];

  return (
    <>
      <h2>Tareas</h2>
      {tasks.map(function (task) {
        return (
          <Item
            title={task.title}
            status={task.status}
            dueDate={task.dueDate}
          />
        );
      })}
    </>
  );
}

export default List;
