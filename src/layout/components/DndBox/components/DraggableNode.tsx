import React, { useRef } from "react"
import { useDrag, useDrop } from "react-dnd"

const type = "DraggableNode"
interface DraggableNodeProps extends React.HTMLAttributes<HTMLDivElement> {
    index: React.Key
    moveNode: (dragIndex: React.Key, hoverIndex: React.Key) => void
}
const DraggableNode = ({ index, children, moveNode }: DraggableNodeProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [{ isOver, dropClassName }, drop] = useDrop({
        accept: type,
        collect: monitor => {
            const { index: dragIndex } = monitor.getItem() || {}
            if (dragIndex === index) {
                return {}
            }
            return {
                isOver: monitor.isOver(),
                dropClassName: "dropping",
            }
        },
        drop: (item: { index: React.Key }) => {
            moveNode(item.index, index)
        },
    })

    const [, drag] = useDrag({
        type,
        item: { index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })
    drop(drag(ref))

    return (
        <div ref={ref} className={isOver ? dropClassName : ""}>
            {children}
        </div>
    )
}

export default DraggableNode
