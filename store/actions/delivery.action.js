export const SET_SHOW_MAP = 'SET_SHOW_MAP'
export const SET_DELIVERY_LIST = 'SET_DELIVERY_LIST'
export const UPDATE_DELIVERY_STATUS = 'UPDATE_DELIVERY_STATUS'

export const setShowMap = (showmap) => ({
    type: SET_SHOW_MAP,
    showmap: showmap
})

export const setDeliveryList = (list) => ({
    type: SET_DELIVERY_LIST,
    list: list
})

/* export const updateDeliveryStatus = () => ({
    type: UPDATE_DELIVERY_STATUS
}) */