import { useState } from "react";


const Problem1 = () => {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Active'); // Default status

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { name, status };
        setTasks([...tasks, newTask]);
        setName('');
    };

    const filterTasks = () => {
        if (status === 'All') {
            // Show all tasks and sort them by order (Active first, Completed next, others later)
            return tasks.sort((a, b) => (a.status === 'Active' ? -1 : a.status === 'Completed' ? 1 : 0));
        } else {
            // Show tasks based on the selected status
            return tasks.filter((task) => task.status === status);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Status:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Active">Active</option>
                        <option value="Completed">Completed</option>
                        <option value="All">All</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filterTasks().map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Problem1;