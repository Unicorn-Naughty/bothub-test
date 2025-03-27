export const clearChunks = (chunk: string) => {
    const clean = chunk.replaceAll("data: ", "")
    const subChanks = clean.split("\n").filter(Boolean)
    try {
        return subChanks.map(subchunk => JSON.parse(subchunk))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return []
    }
}