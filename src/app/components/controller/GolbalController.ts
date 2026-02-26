import { create } from "zustand";
import { GeneralService } from "../services/GeneralService";

const getNavItemsList = (set: any, get: any) => {
    return async () => {
        const generalService = GeneralService();

        const result = await generalService.getNavItemsList();
        let items = result;

        set({ navItemsList: items });
    }
}

const toggleSlideNav = (set: any, get: any) => () =>
    set({ SlideNavOpen: !get().SlideNavOpen });

const setActivePage = (set: any) => (page: "contact" | "group") =>
    set({ activePage: page });

const openMobileDrawer = (set: any) => () => set({ isMobileDrawerOpen: true });
const closeMobileDrawer = (set: any) => () => set({ isMobileDrawerOpen: false });

export const useGlobalStore = create<any>((set: any, get: any) => ({
    isMobileDrawerOpen: false,
    SlideNavOpen: false,
    navItemsList: [],
    activePage: "contact" as "contact" | "group",   

    setActivePage: setActivePage(set),
    toggleSlideNav: toggleSlideNav(set, get),
    openMobileDrawer: openMobileDrawer(set),
    closeMobileDrawer: closeMobileDrawer(set),
    getNavItemsList: getNavItemsList(set, get),

}));
