/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */
import { Dimensions, StatusBar } from "react-native";

/* ------------------------------- Spaces ------------------------------- */
export const windowHeight: number = Dimensions.get('window').height;
export const windowWith: number = Dimensions.get('window').width;
export const statusBarSpace: number = StatusBar.currentHeight! + 50;

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