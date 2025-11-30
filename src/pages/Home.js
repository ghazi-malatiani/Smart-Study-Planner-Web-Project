import { Calendar, Target, TrendingUp, BookOpen } from "lucide-react";

export default function Home({ onNavigate }) {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Plan study sessions efficiently with our intuitive calendar.",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set goals and stay motivated.",
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "Monitor productivity and study habits.",
    },
    {
      icon: BookOpen,
      title: "Subject Management",
      description: "Organize subjects and study materials.",
    },
  ];

  return (
    <div className="flex-fill">

      <section className="py-5 bg-light text-dark text-center">
        <div className="container">
          <h1 className="fw-bold display-5">Master Your Study Schedule</h1>
          <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: "650px" }}>
            Take control of your academic journey with powerful planning tools.
          </p>
          <button
            className="btn btn-primary px-4 py-2 mt-3"
            onClick={() => onNavigate("planner")}
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Everything You Need to Succeed</h2>

          <div className="row g-4">
            {features.map((f, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="p-4 rounded bg-light shadow-sm h-100">
                  <div className="bg-primary bg-opacity-25 rounded p-2 d-inline-flex mb-3">
                    <f.icon className="text-primary" />
                  </div>
                  <h5 className="fw-bold">{f.title}</h5>
                  <p className="text-secondary">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h2 className="fw-bold mb-2">Ready to Transform Your Study Habits?</h2>
          <p className="fs-5 text-light mb-3">Join thousands of successful students.</p>
          <button
            className="btn btn-light text-primary"
            onClick={() => onNavigate("planner")}
          >
            Start Planning Now
          </button>
        </div>
      </section>

    </div>
  );
}
