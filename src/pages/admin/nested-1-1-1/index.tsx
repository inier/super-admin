import { Card } from "antd"

function Nested111() {
    return (
        <Card>
            <div className={"h-full text-center"}>
                <h1 className={"text-2xl text-blue-700 text-center"}>Nested 1-1-1</h1>
                <input style={{ border: "1px solid #aaa" }} />
            </div>
        </Card>
    )
}

export default Nested111
