/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { Dimensions, StatusBar, Platform } from "react-native";

/* -------------------------------- Platform -------------------------------- */
export const isIOS: boolean = Platform.OS === 'ios';

/* ------------------------------- Spaces ------------------------------- */
export const windowHeight: number = Dimensions.get('window').height;
export const windowWith: number = Dimensions.get('window').width;
export const statusBarSpace: number = isIOS ? StatusBar.currentHeight! + 50 : 0;

/* --------------------------------- Sizes --------------------------------- */
export const sm: number = 10;
export const md: number = 15;
export const lg: number = 20;
export const xlg: number = 25;
export const xxlg: number = 30;

/* --------------------------------- Colors --------------------------------- */
export const bgColor: string = '#B3EBF7';
export const mainColor: string = '#00BEDF';
export const white: string = 'white';
export const danger: string = 'red';