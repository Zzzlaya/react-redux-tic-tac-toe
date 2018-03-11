import { connect } from 'react-redux';
import { resetGrid } from '../actions';
import Button from '../components/Button/Button';

const mapStateToProps = state => {
  return {
    text: 'Reset'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(resetGrid());
    }
  };
};

const ResetButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  Button
);

export default ResetButtonContainer;
