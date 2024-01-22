import { Button, Card, Input, Space } from "antd"
import { useEffect, useRef } from "react"
import { usePageContext } from "@/providers/PageManageProvider"
import useKeepAliveKey from "@/hooks/useKeepAliveKey"

import useMemoKeepAliveScroll from "@/hooks/useMemoKeepAliveScroll"
import Counter from "@/modules/Counter"
import { CheckKeepAlive } from "@/components/CheckKeepAlive"

function Home() {
    const domRef = useRef<HTMLDivElement>(null)
    useMemoKeepAliveScroll(domRef)

    const homeKey = useKeepAliveKey()
    useEffect(() => {
        console.log("HomeKey ------->", homeKey)
    }, [])

    const { closeCurrent, open } = usePageContext()
    return (
        <Card title={"首页 (带缓存)"} ref={domRef}>
            <div className={"w-full h-full flex-col flex justify-center"}>
                <Counter />
                <Space className={"mb-[20px]"}>
                    <Button
                        danger
                        type={"primary"}
                        onClick={() => {
                            closeCurrent()
                        }}
                    >
                        关闭
                    </Button>
                    <Button
                        type={"primary"}
                        onClick={() =>
                            open({
                                key: "/no-cache",
                                label: "无缓存页面",
                            })
                        }
                    >
                        打开无缓存页面
                    </Button>
                    <Button
                        type={"primary"}
                        ghost
                        onClick={() =>
                            open({
                                key: "/" + "?id=1",
                                label: "有参数页面",
                            })
                        }
                    >
                        打开有参数首页
                    </Button>
                </Space>
                <Input
                    style={{
                        marginBottom: "20px",
                    }}
                    placeholder="输入一个值 然后切换tab组件不会被销毁"
                ></Input>
                <CheckKeepAlive ref={domRef} />
            </div>
        </Card>
    )
}

export default Home
