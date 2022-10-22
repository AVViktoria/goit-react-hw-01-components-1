export const setOnlineBcgColor = type => {
  switch (type) {
    case 'true':
      return '#74ee7e';
    case 'false':
      return '#f24343';
    default:
      return '#ffff00';
  }
};
