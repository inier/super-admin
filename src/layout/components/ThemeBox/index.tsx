import { useThemeContext } from "@/providers/ThemeProvider"
import { ThunderboltOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"

function ThemeBox() {
    const { toggleTheme } = useThemeContext()

    return (
        <Tooltip title="切换主题">
            <Button
                size={"small"}
                type={"link"}
                icon={<ThunderboltOutlined />}
                onClick={() => {
                    toggleTheme()
                }}
            ></Button>
        </Tooltip>
    )
}

export default ThemeBox
