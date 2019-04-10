import { createSelector } from 'reselect';

const getItems = store => store.items;

export const getItemsCount = createSelector(
  [getItems],
  items => ({
    count: items.length,
    activeCount: items.filter(item => item.status === 'active').length,
    completeCount: items.filter(item => item.status === 'complete').length,
    expiredCount: items.filter(item => item.status === 'expired').length,
  }),
);

export const getDeadline = createSelector(
  [getItems],
  items =>
    Math.min(
      ...items
        .filter(item => item.status === 'active' && item.selectedDay)
        .map(item => item.selectedDay),
    ),
);

export const getLastElem = createSelector(
  [getDeadline, getItems],
  (deadline, items) => items.filter(item => item.selectedDay === deadline),
);
