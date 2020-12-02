import React from 'react';

const ButtonHoc = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            const color = {
                ...this.props,
                buttonColor: 'green'
            }
            //return original component with additional props
            return <WrappedComponent color={color} />
        }
    }
}

export default ButtonHoc;