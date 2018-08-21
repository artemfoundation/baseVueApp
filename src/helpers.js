const initState = ({ state, initial }) => {
  if (state === undefined) {
    return { ...initial }
  }

  for (let k in initial) {
    state[k] = initial[k]
  }

  return state
}

export {
    initState
}
