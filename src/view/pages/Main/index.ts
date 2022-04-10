import { withAuthView } from '../../hocs/withAuthView';
import { withHeader } from '../../hocs/withHeader';
import { MainView } from './Main.view';

const Main = withAuthView(withHeader(MainView));

export { Main };
