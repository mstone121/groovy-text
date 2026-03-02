import { arrayMove } from "@dnd-kit/sortable";

import { Action, type ActionWithPayload, type AppState } from "./types";

export default function appReducer(
  state: AppState,
  action: ActionWithPayload,
): AppState {
  switch (action.type) {
    case Action.ADD_LAYER:
      return {
        ...state,
        layers: [...state.layers, action.payload],
      };

    case Action.REMOVE_LAYER:
      return {
        ...state,
        layers: state.layers.filter((layer) => layer.id !== action.payload),
      };

    case Action.MOVE_LAYER: {
      return {
        ...state,
        layers: arrayMove(
          state.layers,
          action.payload.fromIndex,
          action.payload.toIndex,
        ),
      };
    }

    case Action.UPDATE_LAYER: {
      return {
        ...state,
        layers: state.layers.map((layer) =>
          layer.id === action.payload.id
            ? { ...layer, ...action.payload.updates }
            : layer,
        ),
      };
    }

    case Action.SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: action.payload,
      };

    case Action.SET_FONT:
      return {
        ...state,
        fontName: action.payload,
      };

    case Action.SET_DISPLAY_TEXT:
      return {
        ...state,
        displayText: action.payload,
      };
  }
}
