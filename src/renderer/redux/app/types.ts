import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// These indicate whether or not we are showing or hiding a dialog window
export interface DialogState {
  // /////////////
  // Dialogs
  // /////////////
  settingsDialogOpen: boolean;
}

export interface AppState extends DialogState {
  // /////////////
  // Others
  // /////////////
  // Our application version from package.json
  localVersion: string;
  // Current remote version
  remoteVersion: string;

  // Used in the Mod List to Filter published mods
  searchTerm: string;
}
export type AppActions = ActionType<typeof actions>;
