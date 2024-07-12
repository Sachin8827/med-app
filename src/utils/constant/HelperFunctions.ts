export const isPartSelected = (value: string, bodyParts:[]) => {
    return bodyParts.some((part:string) => part === value)
}