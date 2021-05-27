import {useEffect, useState} from 'react';
import axios from 'axios';

import { Link, Route } from 'react-router-dom';

const Cocktails = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     cocktails: [],
  //     isLoaded: false
  //   }
  // }
  
  const [cocktailsState, setCocktailsState] = useState({ cocktails: [], isLoaded: false });

  // componentDidMount() {
  //   // fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  //   // .then(result => result.json())
  //   // .then(res => this.setState({isLoaded: true, cocktails: res.drinks}))

  //   axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
  //       .then(res => this.setCocktailsState({isLoaded: true, cocktails: res.data.drinks}))
  // }

  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then(res => setCocktailsState({isLoaded: true, cocktails: res.data.drinks}))
  }, []) //pot sa adaug o dependinta cum ar fi param si se apeleaza cand se schimba

  const listOfCocktails = cocktailsState.cocktails.map(c => <li key={c.strDrinkThumb}>{c.strDrink}</li>);

  return(
    <>
    <div>My cocktails</div>
    <ul>
      <li><Link to={`${props.match.url}/vodka`}>Vodka</Link></li>
      <li><Link to={`${props.match.url}/tequila`}>Tequila</Link></li>
      <li><Link to={`${props.match.url}/rum`}>Rum</Link></li>
    </ul>
    <div>
      <Route path={`${props.match.url}/vodka`} render={() => <h1>Vodka based</h1>}/>
      <Route path={`${props.match.url}/tequila`} render={() => <h1>Tequila based</h1>}/>
      <Route path={`${props.match.url}/rum`} render={() => <h1>Rum based</h1>}/>
      <Route path={`${props.match.url}/rum/:id`} component={BarRecommendation}/>
    </div>
    <ul>{cocktailsState.isLoaded && listOfCocktails}</ul>
    </>
  );
  
}

const BarRecommendation = ({match}) =>{
  console.log(match);
  return(
    <div>
      <h1>Bar Recommendation: {match.params.id}</h1>
    </div>
  );
}

export default Cocktails;
