import React, {MouseEvent} from 'react';
import './App.css';
// import {FirstWeek, topCars} from './first-week/FirstWeek';
// import {SecondWeek} from './second-week/SecondWeek';
// import {SecondWeekTaskTwo} from './second-week/SecondWeekTaskTwo';
// import {SecondWeekTaskThree} from './second-week/SecondWeekTaskThree';
// import {SecondWeekTaskFour} from './second-week/SecondWeekTaskFour';
// import SecondWeekTaskFive from './second-week/five-task/SecondWeekTaskFive';
import TaskFive from './second-week/five-task/TaskFive';

function App() {

    return (
        <div className='App'>
            {/*<FirstWeek topCars={topCars}/>*/}
            {/*<SecondWeek />*/}
            {/*<SecondWeekTaskTwo />*/}
            {/*<SecondWeekTaskThree />*/}
            {/*<SecondWeekTaskFour/>*/}
            {/*<SecondWeekTaskFive/>*/}
            <TaskFive />
        </div>
    );
}

export default App;
