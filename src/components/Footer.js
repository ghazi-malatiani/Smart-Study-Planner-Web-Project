import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h5 className="fw-bold">StudyPlanner</h5>
            <p className="small">
              Organize your study schedule efficiently and achieve your
              academic goals.
            </p>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-light text-decoration-none">Support</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="fw-bold">Connect</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><Github size={22} /></a>
              <a href="#" className="text-light"><Twitter size={22} /></a>
              <a href="#" className="text-light"><Mail size={22} /></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <p className="text-center small mb-0">
          © 2025 StudyPlanner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
