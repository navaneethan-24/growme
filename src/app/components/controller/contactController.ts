import { create } from "zustand";
import { ContactService } from "../services/ContactService";

const getDefaultFormModel = () => {
    let model: any = {
        name: "",
        gender: "",
        professions: "",
        groups: "",
        tags: "",
        optInStatus: "",
        lastEngagement: "",
        mobileNumber: "",
        birthOfDay: "",
        birthOfMonth: "",
        birthOfYear: "",
    };
    return model;
}

const openContactForm = (set: any) => (contact: any) =>
    set({
        contactFormOpen: true,
        selectedContactId: contact.id
    });

const closeContactForm = (set: any) =>
    () => set({
        contactFormOpen: false, selectedContactId: ""
    });

const openFilterDrawer = (set: any) => () => set({ filterDrawerOpen: true });
const closeFilterDrawer = (set: any) => () => set({ filterDrawerOpen: false });

const openImportDrawer = (set: any) => () => set({ importDrawerOpen: true });
const closeImportDrawer = (set: any) => () => set({ importDrawerOpen: false });

const openDeleteContact = (set: any) => () => set({ deleteContactOpen: true });
const closeDeleteContact = (set: any) => () => set({ deleteContactOpen: false });



const totalPages = (get: any) => (totalRows: number) =>
    Math.max(1, Math.ceil(totalRows / get().pagination.value));

const setRowValue = (set: any) => (val: number) =>
    set((state: any) => ({ pagination: { ...state.pagination, value: val, page: 1 } }));

const setPage = (set: any, get: any) => (val: number, totalRows: number) => {
    const total = totalPages(get)(totalRows);
    set((state: any) => ({ pagination: { ...state.pagination, page: Math.min(Math.max(1, val), total) } }));
};

const visiblePageCount = (get: any) => (totalRows: number) => {
    const { page, windowSize } = get().pagination;
    const total = totalPages(get)(totalRows);

    let start = Math.max(1, page - Math.floor(windowSize / 2));
    let end = Math.min(total, start + windowSize - 1);
    start = Math.max(1, end - windowSize + 1);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};


const getConactList = (set: any, get: any) => {
    return async (pageState: any = null) => {
        const contactService = ContactService();

        const result = await contactService.getContactList();
        let items = result;

        set({ contactList: items });
    }
}


export const useContactStore = create<any>((set: any, get: any) => ({
    contactFormOpen: false,
    filterDrawerOpen: false,
    importDrawerOpen: false,
    deleteContactOpen: false,
    contactList: [],

    openContactForm: openContactForm(set),
    closeContactForm: closeContactForm(set),
    openFilterDrawer: openFilterDrawer(set),
    closeFilterDrawer: closeFilterDrawer(set),
    openImportDrawer: openImportDrawer(set),
    closeImportDrawer: closeImportDrawer(set),
    openDeleteContact: openDeleteContact(set),
    closeDeleteContact: closeDeleteContact(set),

    getConactList: getConactList(set, get),

    fromModel: getDefaultFormModel(),
    selectedContactId: "",
    pagination: {
        rowCounts: [1, 2, 3, 4, 5],
        value: 5,
        page: 1,
        pageSize: 5,
        windowSize: 4,
    },
    setRowValue: setRowValue(set),
    totalPages: totalPages(get),
    setPage: setPage(set, get),
    visiblePageCount: visiblePageCount(get),
}));
