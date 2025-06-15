import { ArrowRight, ExternalLink, Github } from "lucide-react";
import studyNotionImg from "../assets/study-notion.png";
import expenseImg from "../assets/expense.png";
import simonImg from "../assets/simon-game.png";
import bloodImg from "../assets/blood_bank.png";
import todoImg from "../assets/todo.png";
import drumImg from "../assets/drum.png";
import ayushImg from "../assets/ayush.jpeg";
const projects = [
  {
    id: 1,
    title: "Study Notion",
    description:
      "A full-stack e-learning platform with instructor and student roles, course creation and purchase, secure authentication, media management, and payment integration.",
    image: studyNotionImg,
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    demoUrl: "https://edu-nexus-frontend.vercel.app/",
    githubUrl: "https://github.com/xfaizan26/EduNexus",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A web application to track personal expenses, allowing users to add, edit, and delete transactions, and view their spending habits over time.",
    image:expenseImg,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/xfaizan26/Expense-Tracker",
  },
  {
    id: 3,
    title: "Blood Bank",
    description:
      "A web application for managing blood donations, connecting donors and recipients, and streamlining blood bank operations.",
    image: bloodImg,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/xfaizan26/Blood-Bank",
  },
  {
    id: 4,
    title: "SIH23 Project",
    description:
      "A project developed for the Smart India Hackathon 2023, focusing on providing innovative solutions to real-world problems.",
    image:ayushImg,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/xfaizan26/SIH23",
  },
  {
    id: 5,
    title: "Simon Game",
    description:
      "A JavaScript-based implementation of the classic Simon Game, testing the user's memory through color sequences.",
    image:simonImg,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://simon-game-faiz.netlify.app/",
    githubUrl: "https://github.com/xfaizan26/Simon-Game",
  },
  {
    id: 6,
    title: "Drum Game",
    description:
      "An interactive drum kit application that allows users to play different drum sounds using keyboard keys or mouse clicks.",
    image: drumImg,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://drum-game-wine.vercel.app/",
    githubUrl: "https://github.com/xfaizan26/Drum-Game",
  },
  {
    id: 7,
    title: "Todo App",
    description:
      "A full-stack Todo application enabling users to manage daily tasks with features like adding, updating, and deleting todos.",
    image:todoImg,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/xfaizan26/TodoApp",
  },
];



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/xfaizan26"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
