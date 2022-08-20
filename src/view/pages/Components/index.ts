import { withAuthView } from '../../hocs/withAuthView';
import { withHeader } from '../../hocs/withHeader';
import { ComponentsView } from './Components.view';
import { withLazyLoading } from '../../hocs/withLazyLoading';
import { withSideMenu } from '../../hocs/withSideMenu';

const Components = withLazyLoading(withAuthView(withHeader(withSideMenu(ComponentsView))));

export { Components };
