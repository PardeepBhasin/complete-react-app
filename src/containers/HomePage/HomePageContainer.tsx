import React from 'react';
import {connect } from 'react-redux';
import {fetchRecords} from './action';
import {ParentWrapper} from './style';
import styled from 'styled-components';
import HomePageComponent from '../../components/HomePage/HomePageComponent';

interface MyProps {
    data: Array<{title: string}>;
    fetchTodoList: any
}
// Below styled component inside
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const SecondaryButton = styled(Button) `
  color: yellow
`
class HomePageContainer extends React.PureComponent<MyProps> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchTodoList();
    }
    dummyFuncForTesting() {
        if (true) {
            console.log("Pardeep Bhasin");
        }
        console.log("I am just created for showing simulation through test cases");
    }
    render() {
        return(
            <>
                <ParentWrapper id="fakeId" onClick={this.dummyFuncForTesting}>Data Coming from Redux Store {this?.props?.data ? this.props.data[0].title : null}</ParentWrapper> 
                <HomePageComponent/>
                <Button className='globalParentWrapper'>I am a Button</Button>
                <SecondaryButton>Inherited from Main Button</SecondaryButton>
            </>
        )
    }
}

export const mapStateToProps = (state:any) => {
    return {
        data: state?.data
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchTodoList: () => dispatch(fetchRecords()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
export { HomePageContainer as Container };