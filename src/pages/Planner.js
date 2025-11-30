import { useState, useEffect } from "react";
import {
  Plus,
  Calendar,
  Clock,
  Trash2,
  Check,
  X,
} from "lucide-react";

import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export default function Planner() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    date: "",
    duration: 60,
    priority: "medium",
    notes: "",
  });

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await createTask({
      ...formData,
      completed: false,
    });

    setShowModal(false);
    setFormData({
      title: "",
      subject: "",
      date: "",
      duration: 60,
      priority: "medium",
      notes: "",
    });

    loadTasks();
  }

  async function toggleComplete(task) {
    await updateTask(task.id, { completed: !task.completed });
    loadTasks();
  }

  async function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(id);
      loadTasks();
    }
  }

  function getPriorityClass(priority) {
    switch (priority) {
      case "high":
        return "badge bg-danger";
      case "medium":
        return "badge bg-warning text-dark";
      case "low":
        return "badge bg-success";
      default:
        return "badge bg-secondary";
    }
  }

  if (loading) {
    return (
      <div className="flex-fill d-flex justify-content-center align-items-center">
        <div className="text-secondary fs-5">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-light flex-fill py-4">

      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="fw-bold">Study Planner</h1>
            <p className="text-secondary">Organize your study schedule</p>
          </div>

          <button
            className="btn btn-primary d-flex align-items-center gap-2 shadow-sm"
            onClick={() => setShowModal(true)}
          >
            <Plus size={18} />
            Add Task
          </button>
        </div>

        {tasks.length === 0 ? (
          <div className="bg-white p-5 rounded shadow-sm text-center">
            <Calendar size={60} className="text-secondary mb-3" />
            <h4 className="fw-bold">No tasks yet</h4>
            <p className="text-secondary mb-3">
              Start planning your study schedule by adding your first task.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Add Your First Task
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {tasks.map((task) => (
              <div className="col-md-6 col-lg-4" key={task.id}>
                <div
                  className={`bg-white p-4 rounded shadow-sm border-start ${
                    task.completed
                      ? "border-success opacity-75"
                      : "border-primary"
                  }`}
                  style={{ borderWidth: "4px" }}
                >
                  <div className="d-flex justify-content-between">
                    <h5
                      className={`fw-bold ${
                        task.completed ? "text-muted text-decoration-line-through" : ""
                      }`}
                    >
                      {task.title}
                    </h5>

                    <div className="d-flex gap-2">
                      <button
                        className={`btn btn-sm ${
                          task.completed
                            ? "btn-outline-success"
                            : "btn-outline-secondary"
                        }`}
                        onClick={() => toggleComplete(task)}
                      >
                        <Check size={18} />
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(task.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="mb-1">
                      <strong>Subject:</strong> {task.subject}
                    </p>

                    <p className="mb-1 d-flex align-items-center">
                      <Calendar size={16} className="me-2" />
                      {new Date(task.date).toLocaleDateString()}
                    </p>

                    <p className="mb-1 d-flex align-items-center">
                      <Clock size={16} className="me-2" />
                      {task.duration} minutes
                    </p>
                  </div>

                  <div className="mt-3">
                    <span className={getPriorityClass(task.priority)}>
                      {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                    </span>
                  </div>

                  {task.notes && (
                    <div className="mt-3 pt-3 border-top">
                      <p className="text-secondary small">{task.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block bg-dark bg-opacity-50">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="fw-bold">Add Study Task</h4>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => setShowModal(false)}
                >
                  <X />
                </button>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Task Title</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Duration (min)</label>
                    <input
                      type="number"
                      className="form-control"
                      min="15"
                      step="15"
                      required
                      value={formData.duration}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          duration: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <select
                    className="form-select"
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Notes (optional)</label>
                  <textarea
                    rows="3"
                    className="form-control"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-secondary flex-fill"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary flex-fill"
                  >
                    Add Task
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
