import { create } from "zustand";

const usePhoneBookStore = create((set) => ({
  PhoneBook: [],
  addContact: (name, phoneNum) =>
    set((state) => ({ PhoneBook: [...state.PhoneBook, {id:Date.now(), name, phoneNum }] })),
  searchName: "",
  filteredList: [],
  setSearchName: (name) => set({ searchName: name }),
  setFilteredList: (list) => set({ filteredList: list }),


}));

export default usePhoneBookStore;
