import { create } from "zustand";
import _ from "lodash";

// Default state
const getDefaultState = () => ({
  // Drawers
  filterDrawerOpen: false,
  importDrawerOpen: false,
  addDrawerOpen: false,
  editDrawerOpen: false,
  chip: false,
  deleteContactOpen: false,
  SlideNavOpen: false,

  // Filter values
  selectedCountry: [] as string[],
  selectedTag: [] as string[],
  selectedGroups: [] as string[],
  selectedOptInStatus: [] as string[],
  profession: [] as string[],
  gender: [] as string[],
  lastEngagement: [] as string[],
  day: "",
  month: "",
  year: "",
  activeTagId: null as string | null,

  // Pagination
  rowCounts: [1, 2, 3, 4, 5],
  value: 5,
  page: 1,
  pageSize: 5,
  windowSize: 4,

  // Page toggle
  activePage: "contact" as "contact" | "group",

  //add contact
  addgenderDropDownOpen: false,
  addContactGender: "",
  addConactProfession: "",
  addContactGroup: "",
  addContactTag: "",
  addContactMobileNumber: "",
  addcontactBirthofDay: "",
  addContactBirthofMonth: "",
  addContactBirthofYear: "",

  addchipToggleStates: {} as Record<string, boolean>,

  //edit contact
  genderDropDownOpen: false,
  editContactGender: "",
  editConactProfession: "",
  editContactGroup: "",
  editContactTag: "",
  editContactMobileNumber: "",
  editcontactBirthofDay: "",
  editContactBirthofMonth: "",
  editContactBirthofYear: "",
  editchipToggleStates: {} as Record<string, boolean>,
});

// --- DRAWER ACTIONS ---
const openFilterDrawer = (set: any) => () => set({ filterDrawerOpen: true });
const closeFilterDrawer = (set: any) => () => set({ filterDrawerOpen: false });

const openImportDrawer = (set: any) => () => set({ importDrawerOpen: true });
const closeImportDrawer = (set: any) => () => set({ importDrawerOpen: false });

const openAddContactDrawer = (set: any) => () => set({ addDrawerOpen: true });
const closeAddContactDrawer = (set: any) => () => set({ addDrawerOpen: false });

const openEditContactDrawer = (set: any) => () => set({ editDrawerOpen: true });
const closeEditContactDrawer = (set: any) => () => set({ editDrawerOpen: false });

const openDeleteContact = (set: any) => () => set({ deleteContactOpen: true });
const closeDeleteContact = (set: any) => () => set({ deleteContactOpen: false });


// --- FILTER ACTIONS ---
const setFilterValue = (set: any) => (key: string, value: any) => set({ [key]: value });
const resetFilters = (set: any, get: any) => () => {
  set({
    ...getDefaultState(),
    filterDrawerOpen: get().filterDrawerOpen,
    importDrawerOpen: get().importDrawerOpen,
    addDrawerOpen: get().addDrawerOpen,
    editDrawerOpen: get().editDrawerOpen,
  });
};

// --- PAGINATION ACTIONS ---
const setRowValue = (set: any) => (val: number) => set({ value: val, page: 1 });

const totalPages = (get: any) => (totalRows: number) =>
  Math.max(1, Math.ceil(totalRows / get().value));

const setPage = (set: any, get: any) => (val: number, totalRows: number) => {
  const total = totalPages(get)(totalRows);
  set({ page: Math.min(Math.max(1, val), total) });
};

const visiblePageCount = (get: any) => (totalRows: number) => {
  const { page, windowSize } = get();
  const total = totalPages(get)(totalRows);

  let start = Math.max(1, page - Math.floor(windowSize / 2));
  let end = Math.min(total, start + windowSize - 1);
  start = Math.max(1, end - windowSize + 1);

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};


const toggleChip = (set: any, get: any) => () => set({ chip: !get().chip });

const setContactPage = (set: any, get: any) => () => set({ activePage: "contact" });
const setGroupPage = (set: any, get: any) => () => set({ activePage: "group" });

const toggleSlideNav = (set: any, get: any) => () =>
  set({ SlideNavOpen: !get().SlideNavOpen } );


export const useContactStore = create<any>((set: any, get: any) => ({
  ...getDefaultState(), 

  // Drawers
  openFilterDrawer: openFilterDrawer(set),
  closeFilterDrawer: closeFilterDrawer(set),

  openImportDrawer: openImportDrawer(set),
  closeImportDrawer: closeImportDrawer(set),

  openAddContactDrawer: openAddContactDrawer(set),
  closeAddContactDrawer: closeAddContactDrawer(set),

  openEditContactDrawer: openEditContactDrawer(set),
  closeEditContactDrawer: closeEditContactDrawer(set),

  openDeleteContact: openDeleteContact(set),
  closeDeleteContact: closeDeleteContact(set),

  // Filter actions
  setFilterValue: setFilterValue(set),
  resetFilters: resetFilters(set, get),

  // Pagination actions
  setRowValue: setRowValue(set),
  totalPages: totalPages(get),
  setPage: setPage(set, get),
  visiblePageCount: visiblePageCount(get),

  setContactPage: setContactPage(set, get),
  setGroupPage: setGroupPage(set, get),


  // Chip toggle actions
  toggleChip: toggleChip(set, get),

  // slidebat toggle actions
  toggleSlideNav: toggleSlideNav(set, get),


}));
