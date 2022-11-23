import create from 'zustand';

interface TestStore {
  myNumber: number;
  myProfile: {
    firstname: string;
    lastname: string;
    age: number;
  };
  actions: {
    incMyNumber: () => void;
    updateFirstname: (newFirstName: string) => void;
    happyBirthday: () => void;
  }
}

export const useTestStore = create<TestStore>()((set) => ({
  myNumber: 0,
  myProfile: {
    firstname: 'Brian',
    lastname: 'Cao',
    age: 12,
  },
  actions: {
    incMyNumber: () => set((state) => ({ myNumber: state.myNumber + 1 })),
    updateFirstname: (newFirstname) => set((state) => ({ myProfile: { ...state.myProfile, firstname: newFirstname } })),
    happyBirthday: () => set((state) => ({
      myProfile: { ...state.myProfile, age: state.myProfile.age + 1 }
    }))
  }
}));

export const useStoreActions = () => useTestStore((state) => state.actions);