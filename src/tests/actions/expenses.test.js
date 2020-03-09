
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expnse aciotn object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action ', () => {
    const action = editExpense( '123abc',  { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    })
})

test('should set up add expense aciton', () => {
    const expenseData = {
        description: 'Rent',
        amount: 10900,
        createdAt: 1000,
        note: 'This was last month'
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should set up defaults for add expense', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
        description:'',
        note:'',
        amount:0,
        createdAt:0
        }
    })
})