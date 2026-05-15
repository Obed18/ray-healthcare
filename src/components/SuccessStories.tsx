import React from "react";
import "../styles/SuccessStories.css";
import { Quote, UsersRound, School } from "lucide-react";
import type { LucideIcon } from "lucide-react";


type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type Story = {
  title: string;
  location: string;
  programType: "School Program" | "Community Outreach";
  image: string;
  stats: string[];
  notice: string;
  testimonials: Testimonial[];
  icon?: LucideIcon;
};

const stories: Story[] = [
  {
    title: "SHS Super Zonal Screening Success",
    location: "Koforidua, Eastern Region",
    programType: "School Program",
    icon: UsersRound,
    image: "/stories/Story1.jpeg",
    stats: ["500+ Participants", "Successful Screening"],
    notice: "30 students identified for immediate vision correction.",
    testimonials: [
      {
        quote:
          "This initiative is a blessing, many of our students struggle in class simply because they can't see well. Now they have a chance to thrive.",
        name: "Teacher, Eastern Region School",
        role: "Educator",
      },
      {
        quote:
          "I never knew I had an eye problem until today. I'm happy someone checked my eyes and explained what to do.",
        name: "Girls Prefect, SDA Senior High School",
        role: "Student",
      },
      {
        quote:
          "Now I understand why I was always squinting in class. Thank you, R.A.Y.!",
        name: "Meredith Acquah",
        role: "Student",
      },
    ],
  },
  {
    title: "Rural Community Outreach",
    location: "Koforidua, Eastern Region",
    programType: "Community Outreach",
    image: "/stories/Story2.jpeg",
    icon: School,
    stats: ["200+ Participants", "Successful Screening"],
    notice: "45 individuals connected to affordable treatment.",
    testimonials: [
      {
        quote:
          "Preventive healthcare like this is what our community needs. R.A.Y. Healthcare is filling a major gap.",
        name: "Pastor Danny Praise",
        role: "Community Leader",
      },
      {
        quote:
          "This screening has educated many of us about common eye diseases we previously misunderstood.",
        name: "Community Member",
        role: "Participant",
      },
      {
        quote:
          "We welcome partnerships like this where health meets education and awareness. R.A.Y. is truly doing impactful work.",
        name: "Joel Olateru",
        role: "SAIH Liaison to SHS Sports Directors",
      },
    ],
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="success">
      <div className="container">
        <h2 className="success-title">Success Stories</h2>
        <p className="success-subtitle">
          Real voices from the communities we serve, showcasing the
          transformative impact of accessible eye care.
        </p>

        {stories.map((story, index) => {
          const isReversed = index % 2 !== 0;
          const Icon = story.icon;

          return (
            <div
              key={index}
              className={`story ${isReversed ? "reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="story-image">
                <img src={story.image} alt={story.title} />
                <span className="badge">
                  {Icon && <Icon size={16} />}
                  {story.programType}
                </span>
              </div>

              {/* CONTENT */}
              <div className="story-content">
                <h3>{story.title}</h3>
                <p className="location">{story.location}</p>

                {/* STATS */}
                <div className="stats">
                  {story.stats.map((stat, i) => (
                    <div key={i} className="stat-card">
                      {stat}
                    </div>
                  ))}
                </div>

                {/* NOTICE */}
                <p className="notice">{story.notice}</p>

                {/* TESTIMONIALS */}
                <h4>What People Are Saying</h4>
                <div className="testimonials">
                  {story.testimonials.map((t, i) => (
                    <div key={i} className="testimonial-card">
                        <div className="quote-top">
                        <Quote size={32} className="quote-icon" />
                        <p className="quote">{t.quote}</p>
                        </div>
                        <p className="name">{t.name}</p>
                        <span className="role">{t.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SuccessStories;
