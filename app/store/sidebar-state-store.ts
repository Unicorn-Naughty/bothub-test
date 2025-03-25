import { create } from 'zustand'
interface ISideBarStateStore {
    open: boolean
    changeState: () => void
}
export const sideBarStateStore = create<ISideBarStateStore>((set) => ({
    open: false,
    changeState: () => {
        set((state) => ({ open: !state.open }))
    }
})) 