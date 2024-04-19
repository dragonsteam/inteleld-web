import { createSelector } from 'reselect';

const selectCrud = (state) => state.crud;

export const selectListItems = createSelector([selectCrud], (crud) => crud.list);
