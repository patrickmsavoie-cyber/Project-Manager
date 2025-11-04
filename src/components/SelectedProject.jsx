import Tasks from "./Tasks.jsx";

export default function selectedProject({
  onAddTask,
  onDeleteTask,
  onDelete,
  project,
  tasks,
  onHandleCheck,
  onArchive,
  onRestore,
  isArchived,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const archived = isArchived ? (
    <button
      className="text-stone-600 hover:text-stone-950 mr-20"
      onClick={onRestore}
    >
      Restore
    </button>
  ) : (
    <button
      className="text-stone-600 hover:text-stone-950 mr-20"
      onClick={onArchive}
    >
      Archive
    </button>
  );

  return (
    <div className="w-35 mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex project-header">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          {archived}
          <button
            className="text-stone-600 hover:text-stone-950 mr-20"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        onHandleCheck={onHandleCheck}
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={tasks}
        isArchived={isArchived}
      />
    </div>
  );
}
