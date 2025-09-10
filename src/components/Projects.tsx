import React from "react";
import { GitHubRepo } from "../utils/githubApi";
import { Star, GitFork, Calendar } from "lucide-react";

interface ProjectsProps {
  repos: GitHubRepo[] | null;
  isLoading: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ repos, isLoading }) => {
  // GitHub's official language colors
  const languageColors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    Ruby: "#701516",
    "C#": "#239120",
    PHP: "#4F5D95",
    HTML: "#e34c26",
    CSS: "#1572B6",
    Go: "#00ADD8",
    Rust: "#dea584",
    "C++": "#f34b7d",
    C: "#555555",
    Shell: "#89e051",
    Dockerfile: "#384d54",
    Vue: "#4FC08D",
    React: "#61DAFB",
    Svelte: "#ff3e00",
    Kotlin: "#A97BFF",
    Swift: "#FA7343",
    Dart: "#00B4AB",
    Scala: "#c22d40",
    Haskell: "#5e5086",
    Lua: "#000080",
    R: "#198CE7",
    MATLAB: "#e16737",
    Perl: "#0298c3",
    Elixir: "#6e4a7e",
    Clojure: "#db5855",
    Erlang: "#B83998",
    "F#": "#b845fc",
    Julia: "#a270ba",
    Nim: "#ffc200",
    Crystal: "#000100",
    Zig: "#ec915c",
    Assembly: "#6E4C13",
    Makefile: "#427819",
    CMake: "#DA3434",
    Nix: "#7e7eff",
    PowerShell: "#012456",
    Batchfile: "#C1F12E",
    "Vim script": "#199f4b",
    Emacs: "#c065db",
    Jupyter: "#DA5B0B",
  };

  if (isLoading) {
    return (
      <section className="section">
        <h2 className="section-title">projects on github</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-8 bg-muted rounded mb-4 w-3/4"></div>
              <div className="h-24 bg-muted rounded mb-4"></div>
              <div className="h-6 bg-muted rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!repos || repos.length === 0) {
    return (
      <section className="section">
        <h2 className="section-title">projects on github</h2>
        <div className="text-center py-12 text-[rgba(var(--foreground),0.7)]">
          no repositories found
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">projects on github</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card gradient-border flex flex-col h-full hover:bg-[rgba(var(--muted),0.3)] transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg truncate group-hover:text-[rgba(var(--primary),0.9)] transition-colors">
                {repo.name}
              </h3>
              {repo.fork && (
                <span className="text-xs bg-[rgba(var(--muted),0.5)] text-[rgba(var(--foreground),0.7)] px-2 py-1 rounded-full">
                  Forked
                </span>
              )}
            </div>

            <p className="text-[rgba(var(--foreground),0.7)] text-sm mb-4 flex-grow">
              {repo.description || "no description provided"}
            </p>

            <div className="flex items-center gap-2 mb-3 text-xs text-[rgba(var(--foreground),0.6)]">
              <Calendar size={14} />
              <span>
                updated {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {repo.topics &&
                repo.topics.slice(0, 3).map((topic, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[rgba(var(--primary),0.15)] text-[rgba(var(--foreground),0.9)] px-2 py-1 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-[rgba(var(--muted),0.3)]">
              {repo.language ? (
                <div className="flex items-center">
                  <span
                    className="w-3 h-3 rounded-full mr-2"
                    style={{
                      backgroundColor:
                        languageColors[repo.language] || "#6b7280",
                    }}
                  ></span>
                  <span className="text-sm text-[rgba(var(--foreground),0.7)]">
                    {repo.language}
                  </span>
                </div>
              ) : (
                <span></span>
              )}

              <div className="flex items-center space-x-4">
                <div className="flex items-center text-[rgba(var(--foreground),0.7)]">
                  <Star size={16} className="mr-1" />
                  <span className="text-sm">{repo.stargazers_count}</span>
                </div>

                <div className="flex items-center text-[rgba(var(--foreground),0.7)]">
                  <GitFork size={16} className="mr-1" />
                  <span className="text-sm">{repo.forks_count}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
