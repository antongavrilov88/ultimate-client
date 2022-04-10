import { withAuthView } from '../../hocs/withAuthView';
import { withThemeToggler } from '../../hocs/withThemeToggler';
import { MainView } from './Main.view';

const Main = withAuthView(withThemeToggler(MainView));

export { Main };
