import { useState, useEffect } from "react";
import {
  fetchUserData,
  fetchSpecificRepos,
  GitHubUser,
  GitHubRepo,
} from "./utils/githubApi";
import AnimatedGradient from "./components/AnimatedGradient";
import ProfileHeader from "./components/ProfileHeader";
import ScrollIndicator from "./components/ScrollIndicator";
import About from "./components/About";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const userData = await fetchUserData();
        const reposData = await fetchSpecificRepos([
          "Socialfy",
          "socomitted",
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        console.error("error fetching GitHub data:", err);
        setError("failed to load GitHub data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AnimatedGradient />

      <main>
        {/* Hero Section - Full viewport height */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container">
            {error ? (
              <div className="text-center py-12 text-[rgba(var(--foreground),0.7)]">
                {error}
              </div>
            ) : (
              <div className="w-full max-w-2xl mx-auto">
                <ProfileHeader user={user} isLoading={isLoading} />
              </div>
            )}
          </div>
          {!isLoading && user && !error && <ScrollIndicator />}
        </section>

        {/* Content Sections - Only show when data is loaded */}
        {!isLoading && user && !error && (
          <div className="container">
            <div className="w-full max-w-4xl mx-auto space-y-16 pb-16">
              <About id="about-section" />
              <Projects repos={repos} />
              <SocialLinks username={user.login} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
