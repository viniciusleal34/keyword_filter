import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RoutesPath from '../constants/routes-path';

import { Home } from '../pages/Home';
import { ChangeLogs } from '../pages/ChangeLogs';

import Initialize from './Initialize';
import Analytics from './Analytics';
import { KeywordStorage } from '../context/KeywordContext';
import { ChangelogStore } from '../context/ChangelogContext';


const Routes = () => (
    <BrowserRouter>
        <Initialize />
        <Analytics>
            <Switch>
                <ChangelogStore>
                    <KeywordStorage>
                        <Route
                            exact
                            path={RoutesPath.HOME.PATH}
                            component={Home}
                        />
                        <Route
                            exact
                            path={RoutesPath.LOGS.PATH}
                            component={ChangeLogs}
                        />
                    </KeywordStorage>
                </ChangelogStore>
            </Switch>
        </Analytics>
    </BrowserRouter>
);

export default Routes;
