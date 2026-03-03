import { useAppDispatch, useAppState } from "../../../context";

import SortableList from "../../common/sortable/SortableList";

import LayersContainer from "./LayersContainer";
import LayerEditor from "./LayerEditor";
import AddLayerButton from "./AddLayerButton";
import { Action } from "../../../types";
import SortableContainer from "../../common/sortable/SortableContainer";

export default function LayersList() {
	const { layers } = useAppState();
	const dispatch = useAppDispatch();

	const layerIds = layers.map((layer) => layer.id);

	const moveLayer = (fromIndex: number, toIndex: number) => {
		dispatch({
			type: Action.MOVE_LAYER,
			payload: { fromIndex, toIndex },
		});
	};

	return (
		<LayersContainer actions={<AddLayerButton />}>
			<SortableList ids={layerIds} onMoveLayer={moveLayer}>
				{layers.map((layer) => (
					<SortableContainer key={layer.id} id={layer.id}>
						<LayerEditor layer={layer} />
					</SortableContainer>
				))}
			</SortableList>
		</LayersContainer>
	);
}
