import React from "react";
import { ScrollText, Apple, Pizza } from "lucide-react";

interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const skills = [
    {
      name: "solo roblox developer",
      icon: ScrollText,
      description: "i know luau pretty well",
    },
    {
      name: "typescripter",
      icon: Apple,
      description: "knowing javascript and typescript is so cool",
    },
    {
      name: "java(?) developer",
      icon: Pizza,
      description: "while i know ts and js, i could possibly know java either, but not that much, idk",
    },
  ];

  return (
    <section id={id} className="section">
      <h2 className="text-2xl font-bold mb-8 gradient-text text-center">
        about me
      </h2>

      <div className="card mb-8">
        <p className="text-[rgba(var(--foreground),0.8)] leading-relaxed mb-6">
          hey, what's up everyone? i am a solo developer, and i really wish if i become famous developer
          and get a verified badge. pls {" "}
          <a
            href="https://www.roblox.com/communities/189099566"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline hover:text-[rgba(var(--primary),1)] transition-colors"
          >
            join my community
          </a>!! thanks if u joined
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-[rgba(var(--muted),0.2)] hover:bg-[rgba(var(--muted),0.3)] transition-colors"
            >
              <skill.icon
                size={20}
                className="text-[rgba(var(--primary),0.8)] mt-1 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
                <p className="text-xs text-[rgba(var(--foreground),0.6)]">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
