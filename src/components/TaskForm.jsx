// src/components/TaskForm.jsx
import { useState, useEffect } from "react";

export default function TaskForm({ initialValues, onSubmit, onCancel }) {
  const [values, setValues] = useState(initialValues);

  // Kalau initialValues berubah (misal saat edit), form ikut update
  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title.trim()) return;
    onSubmit(values);
    setValues({ title: "", category: "", desc: "" }); // reset setelah submit
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 8 }}>
      <input
        name="title"
        placeholder="Judul"
        value={values.title}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Kategori"
        value={values.category}
        onChange={handleChange}
      />
      <input
        name="desc"
        placeholder="Deskripsi"
        value={values.desc}
        onChange={handleChange}
      />
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit">Simpan</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Batal
          </button>
        )}
      </div>
    </form>
  );
}
