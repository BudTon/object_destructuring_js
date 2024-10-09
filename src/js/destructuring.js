export function destructuringObject(character) {
    const resultDict = { ...character.special }
    for (let date in resultDict) {
        if (resultDict[date].description === undefined) {
            resultDict[date].description = 'Описание недоступно';
        }
    }
    return resultDict
}

// module.exports = { destructuringObject }
