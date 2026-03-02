export type AppState = {
	id: string;
	displayText: string;
	backgroundColor: Color;
	fontName: string;
	layers: Layer[];
};

export type Layer = {
	id: string;
	color: Color;
	thickness: number;
};

export type Color = string;

export enum Action {
	ADD_LAYER,
	REMOVE_LAYER,
	MOVE_LAYER,
	UPDATE_LAYER,
	SET_BACKGROUND_COLOR,
	SET_FONT,
	SET_DISPLAY_TEXT,
}

export type ActionWithPayload =
	| { type: Action.ADD_LAYER; payload: Layer }
	| { type: Action.REMOVE_LAYER; payload: string }
	| { type: Action.MOVE_LAYER; payload: { fromIndex: number; toIndex: number } }
	| {
			type: Action.UPDATE_LAYER;
			payload: { id: string; updates: Partial<Layer> };
	  }
	| { type: Action.SET_BACKGROUND_COLOR; payload: Color }
	| { type: Action.SET_FONT; payload: string }
	| { type: Action.SET_DISPLAY_TEXT; payload: string };
