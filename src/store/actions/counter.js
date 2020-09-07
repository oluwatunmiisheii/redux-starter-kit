const counterIncrease = incValue => {
  return {
    type: 'INCREMENT',
    payload: {
      value: incValue
    }
  }
}

const counterDecrease = decValue => {
  return {
    type: 'DECREMENT',
    payload: {
      value: decValue
    }
  }
}


export {
  counterIncrease,
  counterDecrease
}