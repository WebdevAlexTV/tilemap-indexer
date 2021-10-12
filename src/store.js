import create from "zustand";

const useStore = create((set, get) => ({
    image: null,
    setImage: (image) => { set({ image }) },
    gridColor: "#ff0000",
    setGridColor: (gridColor) => { set({ gridColor }) },
    textColor: "#ff0000",
    setTextColor: (textColor) => { set({ textColor }) },
    previewUrl: null,
    setPreviewUrl: (previewUrl) => { set({ previewUrl }) },
    itemsX: 1,
    setItemsX: (itemsX) => { set({ itemsX }) },
    itemsY: 1,
    setItemsY: (itemsY) => { set({ itemsY }) },
    menuCollapsed: false,
    setMenuCollapsed: (menuCollapsed) => { set({ menuCollapsed }) }
}));

export default useStore