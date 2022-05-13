
export const reducer = (state, action) => {
  if (action.type === 'add_tag_line') {
    if (action.payload) {
      const filterTagline = state.tag_line.filter((tag) => {
        return tag == action.payload
      })
      if (filterTagline.length == 0) {
        const tag_line = [...state.tag_line, action.payload]
        return {
          ...state,
          tag_line: tag_line
        }
      }
      return {
        ...state,
      }
    }
    return {
      ...state
    }
  }
  if (action.type === 'remove_tag_line') {
    const filterTagline = state.tag_line.filter((tag) => {
      return tag !== action.payload
    })
    return {
      ...state,
      tag_line: filterTagline
    }
  }
  if (action.type === 'inputField') {
    return {
      ...state,
      [action.field]: action.value
    }
  }
  if (action.type === 'clear_data') {
    const newState = action.payload
    return {
      ...newState
    }
  }
  return {
    ...state
  }
}