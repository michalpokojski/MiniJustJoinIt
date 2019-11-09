export const transformById = (collection, idKey = 'id') => {
  return collection.reduce((hash, entity) => {
    hash[entity[idKey]] = entity

    return hash
  }, {})
}

export const transformToArray = collection => Object.values(collection)
