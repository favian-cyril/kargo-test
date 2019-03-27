import data from './data.json';

const initState = {
    jobList: [],
    options: [
        {
            text: 'Price high-low',
            sortType: 'price',
            isAsc: false
        },
        {
            text: 'Price low-high',
            sortType: 'price',
            isAsc: true
        },
        {
            text: 'Date ascending',
            sortType: 'date',
            isAsc: true,
        },
        {
            text: 'Date descending',
            sortType: 'date',
            isAsc: false
        }
    ]
}

const app = (state=initState, action) => {
    switch (action.type) {
        case 'LOAD_DATA': 
            return {
                ...state,
                jobList: [...data.data],
            }
        case 'SET_SORT_TYPE':
            let sortType = action.sortType;
            let isAsc = action.isAsc;
            let newJobList = state.jobList.sort((a,b) => {
                var returnVal = 0;
                if (a[sortType] < b[sortType]) {
                    returnVal = -1;
                }
                if (b[sortType] < a[sortType]) {
                    returnVal = 1;
                }
                if (isAsc) {
                    return returnVal;
                } else {
                    return -(returnVal);
                }
            })
            return {
                ...state,
                jobList: newJobList,
            }
    }
}
export default app