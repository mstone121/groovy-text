import { TextField, type TextFieldProps } from "@mui/material";

import type { Color } from "../../types";

type ColorFieldProps = Omit<TextFieldProps, "type" | "value" | "onChange"> & {
	value: string;
	onChange: (newValue: Color) => void;
};

export default function ColorField({
	value,
	onChange,
	...props
}: ColorFieldProps) {
	return (
		<TextField
			{...props}
			type="color"
			value={value}
			onChange={(e) => onChange(e.target.value as Color)}
		/>
	);
}
