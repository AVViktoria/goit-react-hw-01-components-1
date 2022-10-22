export const setOnlineBcgColor = props => {
  switch (props.type) {
    case 'true':
      return '#74ee7e';
    case 'false':
      return '#f24343';
    default:
      return '#ffff00';
  }
};
