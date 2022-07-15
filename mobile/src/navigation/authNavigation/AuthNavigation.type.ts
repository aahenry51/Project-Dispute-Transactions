import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export enum EAppNavigationRoutes {
  TRANS = 'Transactions',
}

export type TAppNavigationRoutes = {
  [EAppNavigationRoutes.TRANS]: undefined;
};

export type TAppNavigation = StackNavigationProp<TAppNavigationRoutes>;

export type TAppRouteProp = RouteProp<TAppNavigationRoutes>;
