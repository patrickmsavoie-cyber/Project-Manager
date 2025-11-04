import NewTask from "./NewTask";

export default function Tasks({
  isArchived,
  onHandleCheck,
  tasks,
  onAdd,
  onDelete,
}) {
  const disabled = isArchived && "disabled";

  return (
    <section className={disabled}>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      {!isArchived && <NewTask onAdd={onAdd} />}
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md mr-10">
          {tasks.map((task) => {
            let classes = "flex task-info-list p-7 rounded-md mb-2";

            if (!task.isCompleted) {
              classes += " bg-stone-200";
            } else {
              classes += " bg-stone-400";
            }

            return (
              <li key={task.id} className={classes}>
                <input
                  type="checkbox"
                  onChange={() => {
                    onHandleCheck(task.id);
                  }}
                  defaultChecked={task.isCompleted}
                />
                <span className="flex-grow ml-10">{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
