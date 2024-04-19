import { createSelector } from 'reselect';

export const selectAuth = (state) => state.auth;

export const isLoggedIn = createSelector([selectAuth], (auth) => auth.isLoggedIn);
