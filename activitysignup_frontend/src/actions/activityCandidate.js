import api from "./api";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

const formatData = data =>({
    ...data,
    experience:parseInt(data.experience?data.experience:0)
})

export const fetchAll = () => dispatch =>   {
    // get api request
    api.activityCandidate().fetchAll()
    .then(
        response => {
            console.log(response)
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))
}

// action creator for create
export const create = (data, onSuccess) => dispatch =>{
    data = formatData(data)
    api.activityCandidate().create(data)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

// action creator for update
export const update = (id, data, onSuccess) => dispatch =>{
    data = formatData(data)
    api.activityCandidate().update(id, data)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.UPDATE,
                payload: {id,...data}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

// action creator for delete
export const Delete = (id, onSuccess) => dispatch =>{
    api.activityCandidate().delete(id)
        .then(res => {
            dispatch({
                type:ACTION_TYPES.DELETE,
                payload: {id}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}