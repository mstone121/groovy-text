import type { ReactNode } from "react";

import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	type DragEndEvent,
	type UniqueIdentifier,
} from "@dnd-kit/core";

import {
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function SortableList({
	ids,
	onMoveLayer,
	children,
}: {
	ids: UniqueIdentifier[];
	onMoveLayer: (fromIndex: number, toIndex: number) => void;
	children: ReactNode;
}) {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext items={ids} strategy={verticalListSortingStrategy}>
				{children}
			</SortableContext>
		</DndContext>
	);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;

		if (!over) return;

		if (active.id !== over.id) {
			const oldIndex = ids.indexOf(active.id);
			const newIndex = ids.indexOf(over.id);

			onMoveLayer(oldIndex, newIndex);
		}
	}
}
