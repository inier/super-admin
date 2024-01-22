import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

function DndBox({ children }) {
    return <DndProvider backend={HTML5Backend}>{children}</DndProvider>
}

export default DndBox
export { default as DraggableNode } from "./components/DraggableNode"
