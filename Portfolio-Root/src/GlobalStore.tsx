import { create } from 'zustand';


interface user {
    name: string;
}

interface StoreState {
    user: user | null;
    setUser: (user: user) => void;
}


const useLocalStore = create<StoreState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') as string) || null,
  setUser: (user: user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },
  // Add more state variables and actions as needed
}));

export default useLocalStore;