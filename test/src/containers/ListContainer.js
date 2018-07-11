import { connect } from 'react-redux';
import List from '../components/List';

function mapStateToProps(state) {
    
    return {
        state
    };
    
}

const ListContainer = connect(mapStateToProps)(List);

export default ListContainer;