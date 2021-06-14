import { connect } from 'react-redux';
import News from '../../screens/News.screen';
import { RootState } from '../reducers';

const mapStateToProps = (state:RootState) => {
  return {
    storiesItem: state.NewsReducer.storiesItem
  };
};

export default connect(mapStateToProps)(News);