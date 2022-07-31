import { RegisterPageView } from './view';
import { withHeader } from '../../hocs/withHeader';
import { withUnauthView } from '../../hocs/withUnauthView';
import { withLazyLoading } from '../../hocs/withLazyLoading';

const Register = withLazyLoading(withUnauthView(withHeader(RegisterPageView)));

export { Register };
