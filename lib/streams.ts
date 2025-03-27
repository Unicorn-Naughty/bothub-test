export const clearChunks = (chunk: string) => {
    const clean = chunk.replaceAll("data: ", "")
    const subChanks = clean.split("\n").filter(Boolean)
    try {
        return subChanks.map(subchunk => JSON.parse(subchunk))
    } catch (error) {
        console.log(error);
        return []
    }
}