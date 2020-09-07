const storeResult = result => {
  return {
    type: 'STORE_RESULT',
    payload: {
      res: result
    }
  }
}

const deleteResult = id => {
  return {
    type: 'DELETE_RESULT',
    payload: {
      id: id
    }
  }
}

export {
  storeResult,
  deleteResult
}