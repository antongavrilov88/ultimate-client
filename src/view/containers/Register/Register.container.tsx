import { createStructuredSelector } from 'reselect';
import { connect, ConnectedProps, MapDispatchToProps } from 'react-redux';
import { RootState } from '../../../ducks/types';
import { DispatchProps, StateProps } from './types';
import { authActions } from '../../../ducks/Auth/actions';
import { getRequestError, getRequestStatus } from '../../../ducks/Auth/selectors';
import { RegisterView } from './Register.view';

const mapStateToProps = createStructuredSelector<RootState, StateProps>({
  requestStatus: getRequestStatus,
  requestError: getRequestError,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, any> = (dispatch) => ({
  registerUser: (newUserData) => dispatch(authActions.register(newUserData)),
  resetError: () => dispatch(authActions.resetAuthError()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ContainerProps = ConnectedProps<typeof connector>;

const RegisterContainer = connector(RegisterView);

export { RegisterContainer, ContainerProps };
