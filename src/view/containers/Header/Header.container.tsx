import { createStructuredSelector } from 'reselect';
import { connect, ConnectedProps, MapDispatchToProps } from 'react-redux';
import { RootState } from '../../../ducks/types';
import { DispatchProps, StateProps } from './types';
import { authActions } from '../../../ducks/Auth/actions';
import { getUsersEmail } from '../../../ducks/Auth/selectors';
import { HeaderView } from './Header.view';

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  email: getUsersEmail,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, any> = (dispatch) => ({
  onLogout: () => dispatch(authActions.logout()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ContainerProps = ConnectedProps<typeof connector>;

const HeaderContainer = connector(HeaderView);

export { HeaderContainer, ContainerProps };
