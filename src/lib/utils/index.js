Object.prototype.selectionSet = function (customAttributes = false) {
    return this.operation.selectionSet.selections[0].selectionSet.selections.map(item => {
        return customAttributes[item.name.value] ? customAttributes[item.name.value] : item.name.value
    })
}

