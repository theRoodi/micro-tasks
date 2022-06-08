import React, {MouseEvent} from 'react';
import './App.css';
import {FirstWeek, topCars} from './first-week/FirstWeek';
import {SecondWeek} from './second-week/SecondWeek';
import {SecondWeekTaskTwo} from './second-week/SecondWeekTaskTwo';
import {SecondWeekTaskThree} from './second-week/SecondWeekTaskThree';
import {SecondWeekTaskFour} from './second-week/SecondWeekTaskFour';

function App() {

    return (
        <div>
            {/*<FirstWeek topCars={topCars}/>*/}
            {/*<SecondWeek />*/}
            {/*<SecondWeekTaskTwo />*/}
            {/*<SecondWeekTaskThree />*/}
            <SecondWeekTaskFour/>

        </div>
    );
}

export default App;
