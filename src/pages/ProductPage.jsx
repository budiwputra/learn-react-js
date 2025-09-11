import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

const ProductPage = () => {
      const { tasks, loading, error, addTask, updateTask, removeTask } = useTasks();
      const [title, setTitle] = useState("");
    
      const onAdd = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        await addTask({ title, category, desc }); // field bebas sesuai schema MockAPI kamu
        setTitle("");
      };
    
      const onToggle = async (task) => {
        await updateTask(task.id, { ...task, completed: !task.completed});
      };
    
      const onDelete = async (id) => {
        if (confirm("Hapus task ini?")) {
          await removeTask(id);
        }
      };
    
      if (loading) return <p>Memuat…</p>;
      if (error) return <p>Gagal memuat: {error.message}</p>;
    
    return (
        <div>
            <h1>Hello World</h1>
            <form onSubmit={(e) => {
                onAdd({
                    title : e.target.title.value,
                    category : e.target.category.value,
                    desc : e.target.desc.value
                })
            }} action="">
                <label htmlFor="">Title</label>
                <br />
                <input name="title" type="text" />
                <br />
                <label htmlFor="">Category</label>
                <br />
                <input name="category" type="text" />
                <br />
                <label htmlFor="">Desc</label>
                <br />
                <input name="desc" type="text" />
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                
            </div>
        </div>
    )
}

export default ProductPage