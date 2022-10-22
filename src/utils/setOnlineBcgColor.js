export const setOnlineBcgColor = props => {
  switch (props.type) {
    case 'status__true':
      return '#74ee7e';
    case 'status__false':
      return '#f24343';
    default:
      return '#ffff00';
  }
};
