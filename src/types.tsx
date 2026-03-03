export type AppState = {
	id: string;
	meta: Metadata;
	layers: Layer[];
};

export type Metadata = {
	displayText: string;
	baseColor: Color;
	backgroundColor: Color;
	fontName: string;
	fontSize: number;
	fontSpacing: number;
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
	UPDATE_META,
}

export type ActionWithPayload =
	| { type: Action.ADD_LAYER; payload: Layer }
	| { type: Action.REMOVE_LAYER; payload: string }
	| { type: Action.MOVE_LAYER; payload: { fromIndex: number; toIndex: number } }
	| {
			type: Action.UPDATE_LAYER;
			payload: { id: string; update: Partial<Layer> };
	  }
	| {
			type: Action.UPDATE_META;
			payload: Partial<Metadata>;
	  };
