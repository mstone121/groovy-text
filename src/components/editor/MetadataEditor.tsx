import { Grid, TextField, type TextFieldProps } from "@mui/material";

import { useAppDispatch, useAppState } from "../../context";

import ColorField from "../common/ColorField";

import { Action, type Metadata } from "../../types";

const COMMON_INPUT_PROPS: TextFieldProps = {
	size: "small",
	style: { minWidth: 275 },
};

export default function MetadataEditor() {
	const {
		meta: {
			displayText,
			fontName,
			fontSize,
			fontSpacing,
			baseColor,
			backgroundColor,
		},
	} = useAppState();
	const dispatch = useAppDispatch();

	const update = (update: Partial<Metadata>) => {
		dispatch({ type: Action.UPDATE_META, payload: update });
	};

	const Fields = [
		<TextField
			{...COMMON_INPUT_PROPS}
			key="displayText"
			label="Display Text"
			value={displayText}
			onChange={(e) => update({ displayText: e.target.value })}
		/>,
		<ColorField
			{...COMMON_INPUT_PROPS}
			key="backgroundColor"
			label="Background Color"
			value={backgroundColor}
			onChange={(color) => update({ backgroundColor: color })}
		/>,
		<ColorField
			{...COMMON_INPUT_PROPS}
			key="baseColor"
			label="Base Color"
			value={baseColor}
			onChange={(color) => update({ baseColor: color })}
		/>,
		<TextField
			{...COMMON_INPUT_PROPS}
			key="fontName"
			label="Font Name"
			placeholder="The font family to use for rendering text"
			value={fontName}
			onChange={(e) => update({ fontName: e.target.value })}
		/>,
		<TextField
			{...COMMON_INPUT_PROPS}
			key="fontSize"
			label="Font Size"
			type="number"
			value={fontSize}
			onChange={(e) => update({ fontSize: Number(e.target.value) })}
		/>,
		<TextField
			{...COMMON_INPUT_PROPS}
			key="fontSpacing"
			label="Font Spacing"
			type="number"
			value={fontSpacing}
			onChange={(e) => update({ fontSpacing: Number(e.target.value) })}
		/>,
	] as React.ReactElement<TextFieldProps>[];

	return (
		<Grid
			container
			spacing={2}
			justifyContent="space-between"
			alignItems="center"
		>
			{Fields.map((field) => (
				<Grid key={field.props.key} size={{ xs: 12, md: 6, lg: 4 }}>
					{field}
				</Grid>
			))}
		</Grid>
	);
}
