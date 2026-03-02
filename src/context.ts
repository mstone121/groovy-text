import { type ActionDispatch, createContext, useContext } from "react";
import { v4 as uuid } from "uuid";

import type { ActionWithPayload, AppState } from "@types";

export const AppStateContext = createContext<AppState>(getDefaultState());

export const AppDispatchContext = createContext<
  ActionDispatch<[action: ActionWithPayload]>
>(() => {});

export const useAppState = () => useContext(AppStateContext);

export const useAppDispatch = () => useContext(AppDispatchContext);

export function getDefaultState(): AppState {
  return {
    id: uuid(),
    label: "Untitled",
    backgroundColor: "#ffffff",
    textName: "sans-serif",
    layers: [{ id: uuid(), color: "#000000", thickness: 1 }],
  };
}
