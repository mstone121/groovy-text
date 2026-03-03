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
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

export default function SortableItems({
	ids,
	onMoveLayer,
	renderItem,
}: {
	ids: UniqueIdentifier[];
	onMoveLayer: (fromIndex: number, toIndex: number) => void;
	renderItem: (id: UniqueIdentifier) => React.ReactNode;
}) {
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 5,
				delay: 100,
			},
		}),
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
				{ids.map((id) => (
					<SortableItem key={id} id={id}>
						{renderItem(id)}
					</SortableItem>
				))}
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

const SortableItem = ({
	id,
	children,
}: {
	id: UniqueIdentifier;
	children: React.ReactNode;
}) => {
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
};
