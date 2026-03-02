export type AppState = {
	id: string;
	label: string;
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
	RENAME,
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
	| { type: Action.RENAME; payload: string };
