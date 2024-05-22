import { createSelector } from 'reselect';

const selectCrud = (state) => state.crud;

export const selectListItems = createSelector([selectCrud], (crud) => crud.list);
export const selectCreatedItem = createSelector([selectCrud], (crud) => crud.create);
export const selectUpdatedItem = createSelector([selectCrud], (crud) => crud.update);
export const selectDeletedItem = createSelector([selectCrud], (crud) => crud.delete);
export const selectErrorFields = createSelector([selectCrud], (crud) => crud.current?.errorFields);
