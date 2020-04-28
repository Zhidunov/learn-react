export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[itemId] === objPropName) {
            return { ...u, ...newObjProps };
        }
        return u;
    });
}