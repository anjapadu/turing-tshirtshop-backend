export const selectionSet = function (__, customAttributes = false) {
    return __.operation.selectionSet.selections[0].selectionSet.selections.map(item => {
        return customAttributes[item.name.value] ? customAttributes[item.name.value] : item.name.value
    })
}

export const selectionSetWithCount = function (__, customAttributes = false) {
    return __.operation.selectionSet.selections[0].selectionSet.selections[0].selectionSet.selections.map(item => {
        return customAttributes[item.name.value] ? customAttributes[item.name.value] : item.name.value
    })
}