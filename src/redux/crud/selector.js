import { createSelector } from 'reselect';

const selectCrud = (state) => state.crud;

export const selectListItems = createSelector([selectCrud], (crud) => crud.list);

export const selectCreatedItem = createSelector([selectCrud], (crud) => crud.create);
