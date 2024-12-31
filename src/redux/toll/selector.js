import { createSelector } from 'reselect';

const selectToll = (state) => state.toll;

export const selectRecordsList = createSelector([selectToll], (toll) => toll.records_list.result);
