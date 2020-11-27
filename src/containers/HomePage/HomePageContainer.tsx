import React from 'react';
import {connect } from 'react-redux';
import {fetchRecords} from './action';

interface MyProps {
    data: Array<{title: string}>;
    fetchTodoList: any
}
class HomePageContainer extends React.PureComponent<MyProps> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchTodoList();
    }
    render() {
        return(
        <div>Test Data {this?.props?.data ? this.props.data[0].title : null}</div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return {
        data: state?.data
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchTodoList: () => dispatch(fetchRecords()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);