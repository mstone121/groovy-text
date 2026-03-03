import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

import { v4 as uuid } from "uuid";

import { useAppDispatch } from "../../../context";

import { Action } from "../../../types";

export default function AddLayerButton() {
	const dispatch = useAppDispatch();

	const addLayer = () => {
		dispatch({
			type: Action.ADD_LAYER,
			payload: { id: uuid(), color: "#000000", thickness: 1 },
		});
	};

	return (
		<Button
			variant="outlined"
			fullWidth
			onClick={addLayer}
			startIcon={<Add />}
			size="small"
		>
			Add Layer
		</Button>
	);
}
