import './styles.less';
import React from 'react';

import { UrlSync } from '@r/platform/components';

import { AppMainPage } from './pages/AppMain';
import AppOverlayMenu from './components/AppOverlayMenu';
import { AppTopNav } from './components/AppTopNav';
import { CookieSync } from './CookieSync';
import { DomModifier } from './DomModifier';
import { LocalStorageSync } from './LocalStorageSync';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppTopNav />
        <AppOverlayMenu />
        <AppMainPage />
        <UrlSync />
        <CookieSync />
        <LocalStorageSync />
        <DomModifier />
      </div>
    );
  }
}