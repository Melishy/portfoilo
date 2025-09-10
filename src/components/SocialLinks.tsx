import React from "react";
import ghsvg from "../assets/github.svg";
import ttsvg from "../assets/tiktok.svg";
import rbsvg from "../assets/roblox.svg";

interface SocialLinksProps {
  username: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ username }) => {
  const socialLinks = [
    {
      name: `GitHub - @${username}`,
      icon: ghsvg,
      url: `https://github.com/${username}`,
      description: "why do you need my github anyway? oh well",
    },
    {
      name: "TikTok - @𝓶𝓮𝓵𝓲𝓼𝓱𝔂",
      icon: ttsvg,
      url: `https://www.tiktok.com/@MS4wLjABAAAAKjSCIxTTnli_W0RA77d6ZLUOvma0jt25GkAml4xw9CyEYJJyoGGqaliX-M4Y-raE`,
      description: "this is my tiktok. yes i have illegal username lol",
    },
    {
      name: "Roblox - @themelishy",
      icon: rbsvg,
      url: `https://www.roblox.com/users/7337406288/profile`,
      description: "..and my roblox account. pls follow me, and join up my community",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8 gradient-text text-center">
        my social links
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card hover:bg-[rgba(var(--muted),0.3)] transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(var(--primary),0.2)] group-hover:bg-[rgba(var(--primary),0.3)] transition-colors">
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  width={20}
                  height={20}
                  className="text-[rgba(var(--primary),0.9)]"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{link.name}</h3>
                <p className="text-sm text-[rgba(var(--foreground),0.6)]">
                  {link.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
