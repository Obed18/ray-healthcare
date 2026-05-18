import React from "react";
import { motion } from "framer-motion";
import "../styles/QuotesSection.css";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const testimonials = [
  {
    title: "“I Thought Frequent Headaches Were Normal”",
    subtitle: "A Teacher’s Story",
    content: `I attended the GNAT annual meeting mainly for the conference activities, but one of the best decisions I made was stopping by the R.A.Y. Healthcare Africa screening booth.

For a long time, I had been struggling with headaches, blurry vision, and difficulty reading for long hours, especially while marking scripts. I honestly thought it was just stress from teaching.

After the screening, I was informed that I had a vision problem that needed attention. I later followed up for proper care, and the difference has been incredible. I can now work comfortably without constantly straining my eyes.

I’m grateful that R.A.Y. Healthcare Africa brought these services directly to us as teachers because many of us hardly make time to check our own health.`,
  },
  {
    title: "“I Didn’t Know I Was Supposed to See Clearly”",
    subtitle: "A Student Athlete’s Experience",
    content: `I participated in the Eastern Region Super Zonals Sports Competition and decided to do the free eye screening because my friends were also doing it.

During sports activities, I always struggled to see things from afar, especially during matches, but I thought it was normal. After the screening, the team explained that I had a vision problem and needed further care.

That moment changed a lot for me because I realized my poor sight had also been affecting my studies in class.

I’m thankful to R.A.Y. Healthcare Africa for helping me discover this early. It made me more confident both in sports and in school.`,
  },
  {
    title: "“This Was My First Eye Examination in My Life”",
    subtitle: "A Farmer’s Story",
    content: `When I heard there was a free eye screening in Tokpo 2 through the partnership between R.A.Y. Healthcare Africa and LEMPs Foundation, I decided to attend because my eyesight had been getting worse over the years.

As a farmer, I spend most of my time outdoors, but I had never visited an eye clinic before because the nearest facility is far and transportation is expensive.

The doctors examined my eyes and explained what could be causing my blurred vision. They also educated me on how to take care of my eyes and advised me on the next steps.

I felt happy knowing that people still care enough to bring healthcare directly to our community.`,
  },
  {
    title: "“Now We Understand What the Child Was Struggling With”",
    subtitle: "A Caregiver’s Reflection",
    content: `During the donation outreach at Chosen Children Center, one of the children was screened by the R.A.Y. Healthcare Africa team.

For some time, we noticed the child struggled during reading activities and sometimes avoided participating in certain tasks, but we didn’t fully understand why.

After the screening, the team explained that the child could be having vision difficulties and needed further assessment.

That conversation meant a lot to us because it helped us better understand the child’s needs. We are grateful that the outreach did not only focus on donations, but also on the health and wellbeing of the children.`,
  },
  {
    title: "“The Awareness Campaign Pushed Me to Get Checked”",
    subtitle: "A Glaucoma Awareness Story",
    content: `I came across one of the World Glaucoma Awareness Week posts by R.A.Y. Healthcare Africa on social media.

What caught my attention was when they described glaucoma as the ‘silent thief of sight.’ I realized I had never done a proper eye examination before, even though glaucoma runs in my family.

The campaign encouraged me to book an eye check-up, and during the examination, I was told I had elevated eye pressure and needed monitoring.

I’m thankful I acted early because I now understand how important routine eye examinations really are. That campaign may have helped save my vision.`,
  },
];


const QuotesSection: React.FC = () => {
  return (
    <section className="quotes-section">
      <div className="quotes-container">
        <h2 className="quotes-heading">Real Stories. Real Impact.</h2>
        <p className="quotes-subtext">
          Hear directly from individuals whose lives have been impacted through
          our eye care outreach programs.
        </p>

        <div className="quotes-grid">
          {testimonials.map((item, index) => (
            <motion.div
              className="quote-card"
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <h3 className="quote-title">{item.title}</h3>
              <span className="quote-subtitle">{item.subtitle}</span>
              <p className="quote-content">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;