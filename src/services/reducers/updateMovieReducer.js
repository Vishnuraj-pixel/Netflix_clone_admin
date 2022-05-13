
export const updateMovieReducer = (state, action) => {
  if (action.type === 'add_casts') {
    if (action.payload) {
      const filter = state.cast.filter((cast) => {
        return cast === action.payload
      })
      if (filter.length == 0) {
        const cast = [...state.cast, action.payload]
        return {
          ...state,
          cast: cast
        }
      }
      return {
        ...state
      }
    }
  }
  if (action.type === 'add_directors') {
    if (action.payload) {
      const filter = state.director.filter((director) => {
        return director === action.payload
      })
      if (filter.length == 0) {
        const director = [...state.director, action.payload]
        return {
          ...state,
          director: director
        }
      }
      return {
        ...state
      }
    }
  }
  if (action.type === 'add_producers') {
    if (action.payload) {
      const filter = state.producer.filter((producer) => {
        return producer === action.payload
      })
      if (filter.length == 0) {
        const producer = [...state.producer, action.payload]
        return {
          ...state,
          producer: producer
        }
      }
      return {
        ...state
      }
    }
  }
  if (action.type === 'add_writers') {
    if (action.payload) {
      const filter = state.writer.filter((writer) => {
        return writer === action.payload
      })
      if (filter.length == 0) {
        const writer = [...state.writer, action.payload]
        return {
          ...state,
          writer: writer
        }
      }
      return {
        ...state
      }
    }
  }
  if (action.type === 'remove_casts') {
    const filter = state.cast.filter((cast) => {
      return cast != action.payload
    })
    return {
      ...state,
      cast: filter
    }
  }
  if (action.type === 'remove_directors') {
    const filter = state.director.filter((director) => {
      return director != action.payload
    })
    return {
      ...state,
      cast: filter
    }
  }
  if (action.type === 'remove_producers') {
    const filter = state.producer.filter((producer) => {
      return producer != action.payload
    })
    return {
      ...state,
      cast: filter
    }
  }
  if (action.type === 'remove_writers') {
    const filter = state.writer.filter((writer) => {
      return writer != action.payload
    })
    return {
      ...state,
      cast: filter
    }
  }
  return {
    ...state
  }
}