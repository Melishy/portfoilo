import React, { useState, useEffect } from "react";
import { GitHubUser } from "../utils/githubApi";
import { MapPin, Clock } from "lucide-react";

interface ProfileHeaderProps {
  user: GitHubUser | null;
  isLoading: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, isLoading }) => {
  const [is24Hour, setIs24Hour] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: is24Hour,
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [is24Hour]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-muted animate-pulse" />
        <div className="mt-6 w-48 h-8 bg-muted animate-pulse rounded" />
        <div className="mt-3 w-64 h-6 bg-muted animate-pulse rounded" />
      </div>
    );
  }

  if (!user) {
    return <div className="text-center">User not found</div>;
  }

  return (
    <div className="flex flex-col items-center text-center mb-16">
      <img
        src={user.avatar_url}
        alt={`${user.name || user.login}'s profile`}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[rgba(var(--primary),0.6)] shadow-glow"
      />

      <h1 className="mt-4 text-2xl md:text-3xl font-bold gradient-text">
        {user.name || user.login}
      </h1>

      {user.bio && (
        <p className="mt-3 text-[rgba(var(--foreground),0.7)] max-w-xl text-sm md:text-base">
          {user.bio}
        </p>
      )}

      {user.location && (
        <div className="flex items-center gap-1.5 mt-3 text-[rgba(var(--foreground),0.7)] text-sm">
          <MapPin size={16} />
          <span>{user.location}</span>
          <span className="mx-2">•</span>
          <button
            onClick={() => setIs24Hour(!is24Hour)}
            className="flex items-center gap-1.5 hover:text-[rgba(var(--primary),0.8)] transition-colors"
          >
            <Clock size={16} />
            <span>{currentTime}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
