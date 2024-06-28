import { create } from 'zustand';

const useLocalStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  // Add more state variables and actions as needed
}));

export default useLocalStore;