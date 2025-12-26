import resume from "../assets/resume/Sandesh-Singh-Resume.pdf";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>

      <div className="flex gap-4 flex-wrap">
        {/* Contact Button */}
        <Link to="/contact" className="btn">
          Contact
        </Link>

        {/* Resume Download Button */}
        <a href={resume} download className="btn btn-outline">
          Download Resume
        </a>
      </div>
    </section>
  );
};
export default CTA;
