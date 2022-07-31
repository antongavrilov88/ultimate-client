import { createStructuredSelector } from 'reselect';
import { connect, ConnectedProps, MapDispatchToProps } from 'react-redux';
import { RootState } from '../../../ducks/types';
import { DispatchProps, StateProps } from './types';
import { authActions } from '../../../ducks/Auth/actions';
import { getRequestError, getRequestStatus } from '../../../ducks/Auth/selectors';
import { LoginView } from './Login.view';

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  requestStatus: getRequestStatus,
  requestError: getRequestError,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, any> = (dispatch) => ({
  loginUser: (newUserData) => dispatch(authActions.login(newUserData)),
  resetError: () => dispatch(authActions.resetAuthError()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ContainerProps = ConnectedProps<typeof connector>;

const LoginContainer = connector(LoginView);

export { LoginContainer, ContainerProps };
