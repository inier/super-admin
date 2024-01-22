import { useOnActiveByRef } from "keepalive-for-react"
import { useState, forwardRef } from "react"

export const CheckKeepAlive = forwardRef((props, domRef) => {
    const [active, setActive] = useState(false)

    useOnActiveByRef(
        domRef,
        () => {
            console.log("Home onActive")
            setActive(true)
            return () => {
                console.log("Home onInactive")
            }
        },
        false,
    )

    return (
        <div
            className={"bg-amber-300 p-[20px] flex-col flex justify-center items-center w-full h-[400px]"}
            style={{
                backgroundColor: "#ffd81c",
            }}
        >
            <div className={"font-extrabold text-[40px]"}>React KeepAlive💗</div>
            <p className={"text-2xl"}>
                {active ? <span className={"text-red-400 font-extrabold"}>{"active 💡"}</span> : "inactive"}
            </p>
        </div>
    )
})
