import { Mail, Github, Facebook, Instagram, Calendar, Globe } from "lucide-react"
import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-gray-50 flex items-center justify-center">
        <section id="header-section" className="grid md:grid-cols-2 gap-6">
          <div id="profile-image" className="container px-4 md:px-6 text-center">
            <Image
                src="/IMG_1496.jpg"
                alt="IMG_1496.HEIC"
                width={250}
                height={120}
                className="rounded-full aspect-square object-cover"
            />
          </div>
          <div id="name-details" className="container px-4 md:px-6 text-center flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Shamin Asfaq</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Full-Stack Developer, Tech Enthusiast, Minimalist</p>
          <div className="flex justify-center space-x-4">
            <SocialLink
              href="https://www.facebook.com/shamin.asfaq"
              icon={<Facebook className="h-5 w-5" />}
              label="Facebook"
            />
            <SocialLink href="https://github.com/ShaminAsfaq" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="mailto:shamin.asfaq@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
            <SocialLink
              href="https://www.instagram.com/roophiie"
              icon={<Instagram className="h-5 w-5" />}
              label="Instagram"
            />
          </div>
        </div>
        </section>
      </section>

      <main className="container px-4 md:px-6 py-12 mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 text-justify leading-relaxed">
                As a <strong>Full-Stack Developer</strong> with expertise in <strong>Java (Spring Boot), Angular,</strong> and <strong>JavaScript</strong> technologies,
                I am committed to delivering high-quality, scalable applications.
                Currently pursuing a <strong>Master's degree in Automotive Software Engineering</strong> at <strong>TU Chemnitz, </strong>
                I am honing my skills to bridge the gap between software development and the automotive industry.
              </p>
              <p className="text-gray-700 text-justify leading-relaxed">
                I am passionate about building efficient, user-centric applications that address real-world challenges
                and deliver tangible value to users. With a strong foundation in both front-end and back-end development,
                I focus on creating seamless, intuitive experiences while ensuring robust and scalable architecture.
              </p>
            </div>
            <div className="space-y-2">
              <InfoItem icon={<Calendar className="h-5 w-5" />} label="Birth Date" value="July 05, 1994" />
              <InfoItem icon={<Mail className="h-5 w-5" />} label="Email" value="shamin.asfaq@gmail.com" />
              <InfoItem
                icon={<Globe className="h-5 w-5" />}
                label="Website"
                value="shamin-asfaq-portfolio.vercel.app"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <Skill name="Java (Spring Boot)" />
            <Skill name="Angular" />
            <Skill name="HTML/CSS" />
            <Skill name="JavaScript" />
            <Skill name="Node.js" />
            <Skill name="Docker" />
            <Skill name="Material Design" />
            <Skill name="SQL/NoSQL" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Work Experience</h2>
          <div className="space-y-8">
            <ExperienceItem
              title="Full-Stack Developer"
              company="Herton Digital GmbH"
              location="Vienna"
              period="March 2022 - March 2023"
              description="My active development in this role improved scheduling accuracy and optimized staff allocation, leading to better workforce management. The automated email system reduced manual intervention, ensuring timely communication. Nursing home administrators were able to make more informed decisions, resulting in improved operational efficiency across the board."
            />

            <ExperienceItem
              title="Full-Stack Developer"
              company="Southeast University"
              location="Dhaka"
              period="February 2019 - June 2022"
              description="My involvement in the Event Management Module significantly enhanced organizational scheduling efficiency by eliminating conflicts and enabling seamless event synchronization with Google Calendar. The improvements made to the Academic, Administrative, and HR Modules resulted in increased operational productivity and higher user engagement, creating a more efficient and user-centric system."
            />

            <ExperienceItem
              title="Software Developer"
              company="Freelancing"
              location="Dhaka"
              period="2019 - 2020"
              description="NodeJS Developer: A phone call system was successfully deployed on a Jordan Based company's website. Medication Recording System: The system was successfully developed to handle a large number of patients and medication records. The use of ORIENT DB's multimodel capabilities ensured efficient data storage and retrieval, while the comprehensive design improved accuracy in medication prescribing and patient safety."
            />

            <ExperienceItem
              title="Full-Stack Developer"
              company="Mentor"
              location="Dhaka"
              period="February 2019 - June 2022"
              description="Java Mentor: Through this mentorship, the student successfully built a fully functional POS system and gained strong proficiency in Java and JavaFX. Full-Stack Dev Mentor: The student successfully developed and deployed a full-stack web application on Heroku. They gained comprehensive knowledge and practical experience in deploying real-world projects."
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Education</h2>
          <div className="space-y-8">
            <EducationItem
              degree="Master Degree"
              field="Automotive Software Engineering"
              institution="TU Chemnitz"
              period="October 2021 - Present"
              description="Enrolled in Automotive Software Engineering to explore the software side in the Automotive Industry."
            />

            <EducationItem
              degree="Bachelor Degree"
              field="Computer Science and Engineering"
              institution="Southeast University"
              period="February 2014 - December 2018"
              description="Started my journey into the world of Computer Science and Engineering to grasp the know-how of softwares."
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="P2P Video Calling"
              technologies={["Simple Peer", "Node.js", "React"]}
              description="The P2P video calling system successfully allowed users to make one-on-one video calls with real-time socket communication."
              link="https://shamin-lives.vercel.app/material-p2p"
            />

            <ProjectCard
              title="Public Chat Box"
              technologies={["Simple Peer", "Node.js", "React"]}
              description="A real-time public chat application."
              link="https://shamin-lives.vercel.app/public-chat"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">© 2025 Shamin Asfaq. All rights reserved.</p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.facebook.com/shamin.asfaq"
                icon={<Facebook className="h-5 w-5" />}
                label="Facebook"
              />
              <SocialLink href="https://github.com/ShaminAsfaq" icon={<Github className="h-5 w-5" />} label="GitHub" />
              <SocialLink href="mailto:shamin.asfaq@gmail.com" icon={<Mail className="h-5 w-5" />} label="Email" />
              <SocialLink
                href="https://www.instagram.com/roophiie"
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center">
      <div className="mr-2 text-gray-500">{icon}</div>
      <div>
        <span className="font-medium text-gray-700">{label}: </span>
        <span className="text-gray-600">{value}</span>
      </div>
    </div>
  )
}

function Skill({ name }) {
  return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{name}</span>
}

function ExperienceItem({ title, company, location, period, description }) {
  return (
    <div className="border-l-2 border-gray-200 pl-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <span>{company}</span>
        <span className="mx-2">•</span>
        <span>{location}</span>
      </div>
      <p className="text-gray-500 text-sm mb-2">{period}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

function EducationItem({ degree, field, institution, period, description }) {
  return (
    <div className="border-l-2 border-gray-200 pl-4">
      <h3 className="text-xl font-semibold">{degree}</h3>
      <p className="text-gray-700 mb-1">{field}</p>
      <div className="flex items-center text-gray-600 mb-2">
        <span>{institution}</span>
      </div>
      <p className="text-gray-500 text-sm mb-2">{period}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

function ProjectCard({ title, technologies, description, link }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link
        href={link}
        className="text-gray-600 hover:text-gray-900 inline-flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project <span className="ml-1">→</span>
      </Link>
    </div>
  )
}

