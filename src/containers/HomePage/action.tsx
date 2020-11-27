export const fetchRecords = () => {
    return {
        type: 'FETCH_RECORDS'
    }
}

export const fetchRecordsSuccess = () => {
    return {
        type: 'FETCH_RECORDS_SUCCESS'
    }
}

export const fetchRecordsError = () => {
    return {
        type: 'FETCH_RECORDS_ERROR'
    }
}