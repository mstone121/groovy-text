import { Stack, TextField, type TextFieldProps } from "@mui/material";

import { useAppDispatch, useAppState } from "../../context";

import ColorField from "../common/ColorField";

import { Action } from "../../types";

const COMMON_INPUT_PROPS: TextFieldProps = {
	size: "small",
	style: { minWidth: 300 },
};

export default function MetadataEditor() {
	const { displayText, fontName, backgroundColor } = useAppState();
	const dispatch = useAppDispatch();

	return (
		<Stack gap={1} direction="row" justifyContent="space-between">
			<TextField
				{...COMMON_INPUT_PROPS}
				label="Display Text"
				value={displayText}
				onChange={(e) =>
					dispatch({ type: Action.SET_DISPLAY_TEXT, payload: e.target.value })
				}
			/>

			<TextField
				{...COMMON_INPUT_PROPS}
				label="Font Name"
				placeholder="The font family to use for rendering text"
				value={fontName}
				onChange={(e) =>
					dispatch({ type: Action.SET_FONT, payload: e.target.value })
				}
			/>

			<ColorField
				{...COMMON_INPUT_PROPS}
				label="Background Color"
				value={backgroundColor}
				onChange={(color) =>
					dispatch({ type: Action.SET_BACKGROUND_COLOR, payload: color })
				}
			/>
		</Stack>
	);
}
