import { create } from 'zustand'
import {
  createJSONStorage,
  persist,
  type StateStorage,
} from 'zustand/middleware'

interface AppState {
  minX: string
  maxX: string
  minR: string
  maxR: string
  M: string
  N: string
  scaleFactor: string
  animate: boolean
  wasm: boolean
  vert: boolean
  fg: string
  bg: string
  setBg: (arg: string) => void
  setFg: (arg: string) => void
  setMinX: (arg: string | number) => void
  setMaxX: (arg: string | number) => void
  setMinR: (arg: string | number) => void
  setMaxR: (arg: string | number) => void
  setM: (arg: string | number) => void
  setN: (arg: string | number) => void
  setScaleFactor: (arg: string) => void
  setAnimate: (arg: boolean) => void
  setWasm: (arg: boolean) => void
  setVert: (arg: boolean) => void
}

export const settingsMap = {
  N: {
    title: 'N',
    type: 'string',
    callback: (f: string, store: AppState) => {
      store.setN(f)
    },
  },
  scaleFactor: {
    title: 'Canvas drawing scale factor (higher for high resolution)',
    type: 'string',
    callback: (f: string, store: AppState) => {
      store.setScaleFactor(f)
    },
  },
  M: {
    title: 'M',
    type: 'string',
    callback: (f: string, store: AppState) => {
      store.setM(f)
    },
  },
  bg: {
    title: 'Background color',
    type: 'string',
    callback: (f: string, store: AppState) => {
      store.setBg(f)
    },
  },
  fg: {
    title: 'Foreground color',
    type: 'string',
    callback: (f: string, store: AppState) => {
      store.setFg(f)
    },
  },
  wasm: {
    title: 'Draw with WASM (warning: if used, main thread may hang)',
    type: 'checkbox',
    callback: (f: boolean, store: AppState) => {
      store.setWasm(f)
    },
  },
  vert: {
    title: 'Vertical',
    type: 'checkbox',
    callback: (f: boolean, store: AppState) => {
      store.setVert(f)
    },
  },
  animate: {
    title:
      'Animate (warning: if off, can hang main thread. also only works for non-wasm currently)',
    type: 'checkbox',
    callback: (f: boolean, store: AppState) => {
      store.setAnimate(f)
    },
  },
} as const

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    const storedValue = searchParams.get(key) ?? ''
    return JSON.parse(storedValue) as string
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.set(key, JSON.stringify(newValue))
    location.hash = searchParams.toString()
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.delete(key)
    location.hash = searchParams.toString()
  },
}

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      minX: '0',
      maxX: '1',
      minR: '2',
      maxR: '4',
      animate: true,
      wasm: false,
      vert: false,
      bg: 'black',
      fg: 'rgba(255,255,255,0.2)',
      scaleFactor: '2',
      M: '50000',
      N: '1000',
      setMinX: flag => {
        set(() => ({ minX: `${flag}` }))
      },
      setMaxX: flag => {
        set(() => ({ maxX: `${flag}` }))
      },
      setMinR: flag => {
        set(() => ({ minR: `${flag}` }))
      },
      setMaxR: flag => {
        set(() => ({ maxR: `${flag}` }))
      },
      setM: flag => {
        set(() => ({ M: `${flag}` }))
      },
      setN: flag => {
        set(() => ({ N: `${flag}` }))
      },
      setScaleFactor: flag => {
        set(() => ({ scaleFactor: flag }))
      },
      setAnimate: flag => {
        set(() => ({ animate: flag }))
      },
      setWasm: flag => {
        set(() => ({ wasm: flag }))
      },
      setVert: flag => {
        set(() => ({ vert: flag }))
      },
      setFg: flag => {
        set(() => ({ fg: flag }))
      },
      setBg: flag => {
        set(() => ({ bg: flag }))
      },
    }),
    {
      name: 'settings',
      storage: createJSONStorage(() => hashStorage),
    },
  ),
)
