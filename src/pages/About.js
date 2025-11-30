import { Users, Award, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="bg-light flex-fill py-5">
      <div className="container">
        <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
          <h1 className="fw-bold mb-4">About StudyPlanner</h1>

          <p className="text-secondary fs-5">
            StudyPlanner was born from a simple idea: students deserve better
            tools to manage their academic journey.
          </p>

          <p className="text-secondary fs-5 mb-5">
            Our mission is to empower students with intuitive planning tools
            that make studying more organized, efficient, and less stressful.
          </p>

          <div className="row text-center gy-4">
            <div className="col-md-4">
              <div
                className="bg-primary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "70px", height: "70px" }}
              >
                <Users size={32} className="text-primary" />
              </div>
              <h4 className="fw-semibold">Student-Focused</h4>
              <p className="text-secondary">Built by students, for students.</p>
            </div>

            <div className="col-md-4">
              <div
                className="bg-success bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "70px", height: "70px" }}
              >
                <Award size={32} className="text-success" />
              </div>
              <h4 className="fw-semibold">Proven Results</h4>
              <p className="text-secondary">
                Helping students improve study habits.
              </p>
            </div>

            <div className="col-md-4">
              <div
                className="bg-danger bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                style={{ width: "70px", height: "70px" }}
              >
                <Heart size={32} className="text-danger" />
              </div>
              <h4 className="fw-semibold">Made with Care</h4>
              <p className="text-secondary">
                Designed to enhance your learning experience.
              </p>
            </div>
          </div>

          <hr className="my-5" />

          <h2 className="fw-bold">Our Values</h2>
          <ul className="list-unstyled mt-3">
            <li className="mb-2">
              <strong>Simplicity:</strong> Powerful tools don’t need to be complicated.
            </li>
            <li className="mb-2">
              <strong>Privacy:</strong> Your data stays private.
            </li>
            <li className="mb-2">
              <strong>Accessibility:</strong> Tools available to everyone.
            </li>
            <li className="mb-2">
              <strong>Continuous Improvement:</strong> Always evolving.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
