import { useSortable } from "@dnd-kit/sortable";

import type { UniqueIdentifier } from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";

export default function SortableContainer({
	id,
	children,
}: {
	id: UniqueIdentifier;
	children: React.ReactNode;
}) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	return (
		<div
			ref={setNodeRef}
			style={{
				transform: CSS.Transform.toString(transform),
				transition,
				cursor: "move",
				touchAction: "none",
			}}
			{...attributes}
			{...listeners}
		>
			{children}
		</div>
	);
}
