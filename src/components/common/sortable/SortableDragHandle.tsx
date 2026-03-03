import { useSortable } from "@dnd-kit/sortable";

import type { UniqueIdentifier } from "@dnd-kit/core";

export default function SortableItem({
	id,
	children,
}: {
	id: UniqueIdentifier;
	children: React.ReactNode;
}) {
	const { listeners } = useSortable({ id });

	return (
		<div style={{ cursor: "move", touchAction: "none" }} {...listeners}>
			{children}
		</div>
	);
}
