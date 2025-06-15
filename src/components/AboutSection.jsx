import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              MERN Stack Developer & Competitive Programmer
            </h3>

            <p className="text-muted-foreground">
              I am a dedicated student passionate about MERN stack development,
              having built multiple full-stack projects that showcase my skills in
              React, Node.js, Express, and MongoDB.
            </p>

            <p className="text-muted-foreground">
              Alongside web development, I enjoy competitive programming which
              strengthens my problem-solving and algorithmic thinking abilities.
              I continuously strive to learn new technologies and improve my craft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
  href="https://drive.google.com/file/d/15n5nqSDcip4LPaG1I1Y7yzBGKl_RoPVB/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> MERN Stack Development</h4>
                  <p className="text-muted-foreground">
                  Currently learning and applying MERN stack technologies by building multiple projects that focus on creating scalable and maintainable web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Competitive Programming</h4>
                  <p className="text-muted-foreground">
                    Enhancing problem-solving skills by tackling algorithmic challenges
                    on platforms like Codeforces and LeetCode.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Experience</h4>
                  <p className="text-muted-foreground">
                  Finalist of Smart India Hackathon 2023, where I developed a full-stack web app
        solving a real-world problem, showcasing my skills in collaboration and
        development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
