export const getMonth = (date) =>
  date.toLocaleString('en-US', { month: 'short' });

export const getDay = (date) =>
  date.toLocaleString('en-US', { day: 'numeric' });
