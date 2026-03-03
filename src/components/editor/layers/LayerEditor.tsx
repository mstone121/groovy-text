import { Button, TextField, type TextFieldProps } from "@mui/material";

import { useAppDispatch, useAppState } from "../../../context";

import ColorField from "../../common/ColorField";

import LayerEditorContainer from "./LayerEditorContainer";

import { Action, type Layer } from "../../../types";

const COMMON_INPUT_PROPS: TextFieldProps = {
	size: "small",
	style: { minWidth: 120 },
};

export default function LayerEditor({ id }: { id: string }) {
	const { layers } = useAppState();
	const dispatch = useAppDispatch();
	const layer = layers.find((l) => l.id === id);

	if (!layer) {
		throw new Error(`Expected: Layer with ID ${id} not found`);
	}

	const updateLayer = (update: Partial<Layer>) => {
		dispatch({ type: Action.UPDATE_LAYER, payload: { id, update } });
	};

	const removeLayer = () => {
		dispatch({ type: Action.REMOVE_LAYER, payload: id });
	};

	return (
		<LayerEditorContainer>
			<ColorField
				{...COMMON_INPUT_PROPS}
				label="Color"
				value={layer.color}
				onChange={(color) => updateLayer({ color })}
			/>

			<TextField
				{...COMMON_INPUT_PROPS}
				label="Thickness"
				type="number"
				value={layer.thickness}
				onChange={(e) => updateLayer({ thickness: Number(e.target.value) })}
			/>

			<Button onClick={removeLayer} size="small">
				Remove
			</Button>
		</LayerEditorContainer>
	);
}
