import React, {Component} from 'react';

//functie care primeste o componenta ca param
const colorForMyCar = (CarComponent) => {
  class HOC extends Component {
    render() {
      return(
        <CarComponent
        {...this.props}
        color="red"
        />
      );
    }
  }
  return HOC;
}

export default colorForMyCar;