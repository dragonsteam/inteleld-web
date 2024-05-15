import { createSelector } from 'reselect';

const selectMap = (state) => state.map;

export const selectTrucksList = createSelector([selectMap], (map) => map.trucks_list.result);
export const selectSidePanelOpen = createSelector([selectMap], (map) => map.sidepanel_open);
