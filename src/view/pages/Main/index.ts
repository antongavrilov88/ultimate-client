import { withAuthView } from '../../hocs/withAuthView';
import { withHeader } from '../../hocs/withHeader';
import { MainView } from './Main.view';
import { withLazyLoading } from '../../hocs/withLazyLoading';

const Main = withLazyLoading(withAuthView(withHeader(MainView)));

export { Main };
