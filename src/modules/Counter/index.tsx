import { Button, Input } from "antd"
import { decrement, increment } from "@/modules/Counter/counterSlice"
import { useAppSelector, useAppDispatch } from "@/hooks"

function Counter() {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className={"flex w-[400px] mb-[30px] items-center"}>
            <Button type={"link"}>Redux Example</Button>
            <Button
                onClick={() => {
                    dispatch(decrement())
                }}
            >
                minus -
            </Button>
            <Input value={count}></Input>
            <Button
                onClick={() => {
                    dispatch(increment())
                }}
            >
                plus +
            </Button>
        </div>
    )
}

export default Counter
