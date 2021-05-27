import hoComponent from './hoComponent';

const AddColorComponent =  props => <> The color for my car is {props.color}</>;

const CarComponent = hoComponent(AddColorComponent);

export default CarComponent;