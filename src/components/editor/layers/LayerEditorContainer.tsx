import { IconButton, Stack, Box } from "@mui/material";

import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import SortableDragHandle from "../../common/sortable/SortableDragHandle";

export default function LayerEditorContainer({
	id,
	children,
}: {
	id: string;
	children: React.ReactNode;
}) {
	return (
		<Box
			style={{
				padding: 16,
				border: "1px solid #aaa",
				borderRadius: 4,
			}}
		>
			<Stack direction="row" alignItems="center" gap={1}>
				<SortableDragHandle id={id}>
					<IconButton edge="start" style={{ cursor: "inherit" }}>
						<DragIndicatorIcon />
					</IconButton>
				</SortableDragHandle>

				{children}
			</Stack>
		</Box>
	);
}
