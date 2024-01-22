import { useState, useLayoutEffect } from "react"

function useResize() {
    const [collapsed, setCollapsed] = useState(false)
    const [showSide, setShowSide] = useState(true)

    useLayoutEffect(() => {
        function onResize() {
            const width = window.innerWidth
            if (width < 768) {
                setCollapsed(true)
            }
            if (width > 1400) {
                setCollapsed(false)
            }
            if (width < 660) {
                setShowSide(false)
            } else {
                setShowSide(true)
            }
        }
        onResize()
        window.addEventListener("resize", onResize)
        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [setCollapsed, setShowSide])

    return { collapsed, showSide, setCollapsed, setShowSide }
}

export default useResize
