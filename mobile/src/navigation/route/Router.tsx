import React, {useLayoutEffect} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';

export const Router = () => {
  return true ? <AppNavigation /> : <AuthNavigation />;
};
