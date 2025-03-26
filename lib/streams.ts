export const clearChunks = (chunk: string) => {
    const clean = chunk.replaceAll("data: ", "")
    const subChanks = clean.split("\n").filter(Boolean)
    try {
        return subChanks.map(subchunk => JSON.parse(subchunk))
    } catch (error) {
        console.log({ clean, chunk, error, subChanks });
        return []
    }
}