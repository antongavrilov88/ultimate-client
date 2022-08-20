import { withAuthView } from '../../hocs/withAuthView';
import { withHeader } from '../../hocs/withHeader';
import { MainView } from './Main.view';
import { withLazyLoading } from '../../hocs/withLazyLoading';
import { withSideMenu } from '../../hocs/withSideMenu';

const Main = withLazyLoading(withAuthView(withHeader(withSideMenu(MainView))));

export { Main };
