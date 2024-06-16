/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { create } from "zustand";

const githubProfile = (set, get) => ({
  // Initial state
  username: "254mathenge",
  profileInfo: {},
  reposInfo: [],
  followersInfo: [],
  followingInfo: [],
  isLoading: false,
  error: null,

  // Actions
  setUsername: (username) => {
    set({ username });
  },

  fetchProfile: async (username) => { 
    try {
      set({ isLoading: true, error: null });
      console.log("---fetching----",username);
      
      await fetch(`https://api.github.com/users/${username}`)
      .then(async response => {
        const data = await response.json();
        set({ profileInfo: data, isLoading: false });
      })
      
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  fetchRepos: async (username) => {
    try {
      set({ isLoading: true, error: null });
      
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      set({ reposInfo: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  fetchFollowers: async (username) => {
    try {
      set({ isLoading: true, error: null });
     
const response = await fetch(`https://api.github.com/users/${username}/followers`);
      const data = await response.json();
      set({ followersInfo: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },

  fetchFollowing: async (username) => {
    try {
      set({ isLoading: true, error: null });
     
      const response = await fetch(`https://api.github.com/users/${username}/following`);
      const data = await response.json();
      set({ followingInfo: data, isLoading: false });
    } catch (error) {
      set({ error, isLoading: false });
    }
  }
});

const useGithubProfile = create(githubProfile);
export default useGithubProfile;
