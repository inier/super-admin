import { Input } from "antd"
import useOnActive from "@/hooks/useOnActive"

function Theme() {
    const domRef = useOnActive(() => {
        console.log("active Theme")
        return () => {
            console.log("clean Theme")
        }
    })
    return (
        <div ref={domRef}>
            <h1>Theme</h1>
            <Input placeholder="输入一个值 然后切换tab组件不会被销毁" />
        </div>
    )
}

export default Theme