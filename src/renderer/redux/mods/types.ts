import { ActionType } from 'typesafe-actions';

import { actions } from './index';
// These are all intentionally lower case to match what the VDF file wants
export interface Mod {
  ////////////////
  // Internal App State Only
  ////////////////

  // The unique ID for the mod
  id: number;
  // Is the mod selected
  selected: boolean;

  // ///////////
  // VDF Stuff
  // //////////
  // This should always be 299740 leaving it to make it more generic... for science
  appid: number;
  // Where are the mod files stored.
  contentfolder: string;
  // The image that is displayed for the mod
  previewfile: string;
  // Whether the mod is visible 0 public 1 friends only 2 hidden
  visibility: number;
  // The title of the mod
  title: string;
  // A description of the mod
  description: string;
  // The changelog for the mod
  changenote: string;
  // This is either 0 (if mod has not yet been published) or a random id number given back to us by steam
  // Also sometimes called a content id
  publishedfileid: number;
}

export type ModsState = Mod[];

export type ModsActions = ActionType<typeof actions>;
