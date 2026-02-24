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

export const useHeaderStore = create<any>((set: any, get: any) => ({
    navItemsList: [],
    getNavItemsList: getNavItemsList(set, get),

}));