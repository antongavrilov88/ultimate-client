import { Switch } from '@mui/material';
import React, { useMemo } from 'react';
import { TogglerProps } from './types';

const TogglerView: React.FC<TogglerProps> = ({ onToggle, isOn }) => {
  const onToggleHandler = () => {
    if (onToggle) onToggle();
  };

  const currentState = useMemo(() => isOn, [isOn]);

  return <Switch onChange={onToggleHandler} checked={currentState} />;
};

export { TogglerView };
