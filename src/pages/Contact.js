import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-light py-5 flex-fill">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">Get in Touch</h1>
          <p className="text-secondary fs-5">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow-sm">

              {submitted ? (
                <div className="text-center py-5">
                  <div className="bg-success bg-opacity-25 rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3"
                       style={{ width: "70px", height: "70px" }}>
                    <MessageSquare size={32} className="text-success" />
                  </div>
                  <h3 className="fw-bold">Message Sent!</h3>
                  <p className="text-secondary">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Subject</label>
                      <input
                        name="subject"
                        type="text"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        rows="5"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 mt-3">
                      <button className="btn btn-primary w-100">
                        Send Message
                      </button>
                    </div>

                  </div>
                </form>
              )}

            </div>
          </div>

          <div className="col-lg-4">
            <div className="bg-white p-4 rounded shadow-sm mb-3">
              <div className="bg-primary bg-opacity-25 rounded d-inline-flex p-2 mb-2">
                <Mail className="text-primary" />
              </div>
              <h5>Email Us</h5>
              <p className="text-secondary">support@studyplanner.com</p>
            </div>

            <div className="bg-white p-4 rounded shadow-sm mb-3">
              <div className="bg-success bg-opacity-25 rounded d-inline-flex p-2 mb-2">
                <MessageSquare className="text-success" />
              </div>
              <h5>Live Chat</h5>
              <p className="text-secondary">Mon–Fri, 9am–5pm</p>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <div className="bg-danger bg-opacity-25 rounded d-inline-flex p-2 mb-2">
                <MapPin className="text-danger" />
              </div>
              <h5>Office</h5>
              <p className="text-secondary">
                123 Education Street<br />
                Learning City, LC 12345
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
