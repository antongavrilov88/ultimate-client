import { LoginPageView } from './view';
import { withHeader } from '../../hocs/withHeader';
import { withUnauthView } from '../../hocs/withUnauthView';
import { withLazyLoading } from '../../hocs/withLazyLoading';

const Login = withLazyLoading(withUnauthView(withHeader(LoginPageView)));

export { Login };
