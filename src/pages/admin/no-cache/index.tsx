import { useEffect, useRef } from "react"
import { Button, Card, Input, Space } from "antd"
import { usePageContext } from "@/providers/PageManageProvider"
import Counter from "@/modules/Counter"
import { CheckKeepAlive } from "@/components/CheckKeepAlive"

function NoCache() {
    const { closeCurrent } = usePageContext()
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log("NoCache mount")
        return () => {
            console.log("NoCache unmount")
        }
    }, [])

    return (
        <Card className={"h-full"} title={"NoCache 无缓存"} bordered={false}>
            <Counter />
            <Space
                className={"mb-[20px]"}
                onClick={() => {
                    closeCurrent()
                }}
            >
                <Button type={"primary"} ghost>
                    关闭
                </Button>
            </Space>
            <Input
                style={{
                    marginBottom: "20px",
                }}
                placeholder="输入一个值 然后切换tab组件会被销毁"
            ></Input>
            <CheckKeepAlive ref={domRef} />
        </Card>
    )
}

export default NoCache
