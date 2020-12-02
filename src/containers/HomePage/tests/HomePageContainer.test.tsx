import { shallow } from 'enzyme';
import { Container, mapStateToProps, mapDispatchToProps } from '../HomePageContainer';

test('Container test', () => {
    let data = [{'title': 'deep'}];
    const initialState = {
        data: {}
    }
    const component = shallow(<Container data={data} fetchTodoList={() => {}}/>);
    const fakeFunc = jest.spyOn(Container.prototype, 'dummyFuncForTesting');
    component.find('#fakeId').simulate('click');
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).fetchTodoList();
    expect(mapStateToProps(initialState).data).toEqual(initialState.data);
    expect(component).toMatchSnapshot();
    expect(component.props().children).toEqual('deep');
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'FETCH_RECORDS'});
})

// Describe basically used to wrap multiple test cases in single block
describe('Container Test case', () => {

})