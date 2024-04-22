import { createSelector } from 'reselect';

export const selectAuth = (state) => state.auth;

export const selectCurrent = createSelector([selectAuth], (auth) => auth.current);
// export const isLoggedIn = createSelector([selectAuth], (auth) => auth.isLoggedIn);
