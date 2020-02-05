import axiosInstance from '../../api/axios'
// action types
export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DETAIL = 'FETCH_DETAIL'
export const TOGGLE_LOADING = 'TOGGLE_LOADING'

export const recieveData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  }
}

export const requestData = (dataType) => {
  // console.log('requestData jalan. good job')
  return (dispatch) => {
    // console.log('requesting data via axios')
    axiosInstance({
      method: 'GET',
      url: `/top/${dataType}/1`,
    })
      // take data.top
      // (destructure specific value within object key)
      .then(({ data: { top } }) => {
        // console.log('requestData answered', top)
        dispatch(recieveData(top))
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export const recieveDetail = (detail) => {
  return {
    type: FETCH_DETAIL,
    payload: detail,
  }
}

export const requestDetail = (dataType, id) => {
  return (dispatch) => {
    dispatch(toggleLoading())
    axiosInstance({
      method: 'GET',
      url: `/${dataType}/${id}`,
    })
      .then(({ data }) => {
        console.log(data)
        dispatch(toggleLoading(false))
        dispatch(recieveDetail(data))
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
}

export const toggleLoading = (status = true) => {
  return {
    type: TOGGLE_LOADING,
    payload: status,
  }
}
