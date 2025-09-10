import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";
const USERNAME = "Melishy";

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  blog?: string;
  email?: string | null;
  twitter_username?: string | null;
  location?: string | null;
  company?: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  topics: string[];
  visibility: string;
}

export const fetchUserData = async (): Promise<GitHubUser> => {
  try {
    const response = await axios.get<GitHubUser>(
      `${GITHUB_API_URL}/users/${USERNAME}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
};

export const fetchUserRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await axios.get<GitHubRepo[]>(
      `${GITHUB_API_URL}/users/${USERNAME}/repos?sort=updated&per_page=100`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    throw error;
  }
};

export const fetchSpecificRepos = async (
  repoNames: string[]
): Promise<GitHubRepo[]> => {
  try {
    const repoPromises = repoNames.map((repoName) =>
      axios.get<GitHubRepo>(`${GITHUB_API_URL}/repos/${USERNAME}/${repoName}`)
    );
    const responses = await Promise.all(repoPromises);
    return responses.map((response) => response.data);
  } catch (error) {
    console.error("Error fetching specific repos:", error);
    throw error;
  }
};
