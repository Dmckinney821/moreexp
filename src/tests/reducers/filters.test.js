import moment from 'moment';
import filtersReducer from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sorby to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('should set sorby to amount', () => {
        const currentState = {
            text: '',
            starDate: undefined,
            endDate: undefined,
            sortBy: 'amount'
        };
        const action = { type: 'SORT_BY_DATE'}
        const state = filtersReducer(currentState, action)
        expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'This is my';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
})

test('should set startdate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)
})

test('should set enddate filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
})