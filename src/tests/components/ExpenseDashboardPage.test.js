import React from 'react';
import { shallow } from 'enzyme';
import  ExpenseDashboardPage  from '../../components/ExpenseDashboardPage';


test('should render ExpenseDashboardPage with expensies', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});