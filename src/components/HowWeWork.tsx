import { motion } from "framer-motion";
import { UsersRound, ScanHeart, ClipboardMinus, HeartHandshake, CheckCircle, } from "lucide-react";
import "../styles/HowWeWorks.css";

const steps = [
  {
    id: 1,
    icon: <UsersRound size={32} strokeWidth={2.5} />,
    title: "Community Engagement",
    description:
      "We work with local leaders to identify communities in need and schedule visits.",
  },
  {
    id: 2,
    icon: <ScanHeart size={32} strokeWidth={2.5} />,
    title: "Mobile Screening",
    description:
      "Our trained team conducts comprehensive eye examination at your doorstep. We bring vision to your doorsteps",
  },
  {
    id: 3,
    icon: <ClipboardMinus size={32} strokeWidth={2.5} />,
    title: "Assessment & Documentation",
    description:
      "We document findings and provide detailed reports for each individual screened.",
  },
  {
    id: 4,
    icon: <HeartHandshake size={32} strokeWidth={2.5} />,
    title: "Treatment & Follow-up",
    description:
      "We connect patients to appropriate treatment and provide ongoing support.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="howitworks">
      <h2 className="howitworks-title">How It Works</h2>
      <p>Our ambassador program is designed to be simple, transparent, and rewarding</p>
      <div className="howitworks-steps">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="howitworks-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="how-icon-wrapper">
              <span className="how-ping"></span>
              {step.icon}
              <span className="step-number">{step.id}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
          
        ))}
      </div>
      <div className="Quality"> <CheckCircle size={20} />Quality assured at every step</div>
    </section>
  );
};

export default HowItWorks;
