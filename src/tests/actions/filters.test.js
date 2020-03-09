import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../../actions/filters'

test('should gener ate set start dat action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end dat action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should gener ate set start dat action', () => {
    const text = 'rent'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should gener ate set start dat action', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should gener ate set start dat action', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
})

test('should gener ate set start dat action', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
})