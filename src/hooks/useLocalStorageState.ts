import { Dispatch, SetStateAction } from "react"
import useStorageState from "@/hooks/useStorageState"

interface Options<T> {
    serializer?: (value: T) => string
    deserializer?: (value: string) => T
}

function useLocalStorageState<T>(
    key: string,
    value?: T | (() => T),
    options?: Options<T>,
): [T, Dispatch<SetStateAction<T>>] {
    const { serializer, deserializer } = {
        serializer: JSON.stringify,
        deserializer: JSON.parse,
        ...options,
    }
    return useStorageState(key, value, { serializer, deserializer, storage: "local" })
}

export default useLocalStorageState
