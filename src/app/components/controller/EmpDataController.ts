import { create } from "zustand";

const addRow = (set: any, get: any) => () =>
    set({
        rows: [
            ...get().rows,
            { id: get().rows.length + 1, name: "", gender: null, dob: null }
        ]
    });

const updateRow = (set: any, get: any) => (id: number, changes: any) =>
    set({
        rows: get().rows.map((row: any) =>
            row.id === id ? { ...row, ...changes } : row
        ),
    });

const deleteRow = (set:any, get: any) => (id: number) =>
    set ({
        rows: get().rows.filter((row: any) => row.id !== id)
    })

const handleSubmit = (set: any, get: any) => () => {
    const rows = get().rows;
    const isValid = rows.every((row: any) => row.name && row.gender && row.dob);
    if (!isValid) {
        alert("Please fill in all fields before submitting.");
        return;
    }
    console.log("Employee Data:", rows);
};

export const useEmpDataStore = create<any>((set: any, get: any) => ({

    rows: [{ id: 1, name: "", gender: null, dob: null }],
    addRow: addRow(set, get),
    updateRow: updateRow(set, get),
    deleteRow: deleteRow(set, get),
    handleSubmit: handleSubmit(set, get),

}));