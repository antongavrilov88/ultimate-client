import { Nullable } from '../../../types/utils';

export interface HeaderProps {
  onThemeToggle: () => void;
  onLogout: () => void;
  isTogglerOn?: boolean;
  email?: Nullable<string>;
}
