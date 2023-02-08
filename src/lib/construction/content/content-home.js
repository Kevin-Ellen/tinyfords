// lib > construction > content > content-home.js

import dataCars from '../../../data/data-allCars';

import dataSorter from "../../helpers/helper-dataSorter";
import dataSlicer from "../../helpers/helper-dataSlicer";

import itemGrid from '../components/component-grid';

const contentHome = () => {

  const allCars = dataSorter(dataCars(), 'added', 'asc');

  return(`
    <div class="compContent">
      <h1>My Small Cars Collection</h1>
      <p>Welcome to Tiny Fords, the website of a Ford die-cast car enthusiast. Here, you'll find my collection of Hot Wheels, Matchbox, and other small scale models of your many Ford cars. Our easy-to-use website makes it simple to navigate and find the cars, this is mainly so we can avoid buying duplicates and keep our collection up-to-date. Let's dive in and explore the collection together!</p>
      <p>Currently there are <strong>${allCars.length}</strong> items within the various collections!</p>
    </div>

    ${itemGrid(dataSorter(dataSlicer(allCars), 'added', 'desc'), "Latest additions")}
    
  `);
}

export default contentHome;

