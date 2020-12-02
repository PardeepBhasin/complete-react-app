import {ParentWrapper} from '../../containers/HomePage/style';
import ButtonHoc from '../../shared/HOC/button';

const HomePageComponent  = (className:any, color:{buttonColor:string}) => {
    return (
        <ParentWrapper color={color.buttonColor} className={className}>Deep</ParentWrapper>
    )
}

export default ButtonHoc(HomePageComponent);