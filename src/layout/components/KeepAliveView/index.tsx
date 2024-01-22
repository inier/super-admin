import { memo } from "react"
import KeepAlive from "keepalive-for-react"

// to prevent re-rendering when user input a new url to navigate
const MemoizedKeepAlive = memo(KeepAlive, (prev, next) => {
    return prev.activeName === next.activeName
})

function KeepAliveView({ children, ...restProps }) {
    return <MemoizedKeepAlive {...restProps}>{children}</MemoizedKeepAlive>
}

export default KeepAliveView
