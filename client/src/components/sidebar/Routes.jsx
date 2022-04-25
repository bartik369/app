import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { AddDevice } from '../pages/AddDevice';
import { DeviceSearch } from '../pages/DeviceSearch';
import { Statistic } from '../pages/Statistic';
import { Users } from '../pages/Users';
import { Tasks } from '../pages/Tasks';
import { Calendar } from '../pages/Calendar';
import { Settings } from '../pages/Settings';

const Routes = () => {
    return (
        <div>
            <Routes>
                <Route path='/search' element={<DeviceSearch />}></Route>
            </Routes>
        </div>
    )
}

export default Routes;