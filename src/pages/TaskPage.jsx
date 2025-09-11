import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";

export default function TasksPage() {
  const { tasks, loading, error, addTask, updateTask, removeTask } = useTasks();
  const [editingTask, setEditingTask] = useState(null);

  const handleAdd = async (values) => {
    await addTask(values);
  };

  const handleEditSave = async (values) => {
    await updateTask(editingTask.id, values);
    setEditingTask(null);
  };

  const handleDelete = async (id) => {
    if (confirm("Hapus task ini?")) {
      await removeTask(id);
    }
  };

  if (loading) return <p>Memuat…</p>;
  if (error) return <p>Gagal memuat: {error.message}</p>;

  return (
    <div style={{ maxWidth: 520, margin: "24px auto", padding: 16 }}>
      <h1>Tasks</h1>

      {/* Form Tambah Task */}
      <TaskForm
        initialValues={{ title: "", category: "", desc: "" }}
        onSubmit={handleAdd}
      />

      {/* Daftar Task */}
      <ul style={{ display: "grid", gap: 8, padding: 0, listStyle: "none" }}>
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}
          >
            {editingTask?.id === t.id ? (
              <TaskForm
                initialValues={editingTask}
                onSubmit={handleEditSave}
                onCancel={() => setEditingTask(null)}
              />
            ) : (
              <>
                <h3>{t.title}</h3>
                <p>
                  <b>Kategori:</b> {t.category}
                </p>
                <p>{t.desc}</p>
                <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                  <button onClick={() => setEditingTask(t)}>Edit</button>
                  <button onClick={() => handleDelete(t.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
