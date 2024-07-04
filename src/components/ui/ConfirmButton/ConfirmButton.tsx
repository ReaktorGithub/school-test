import styles from './style.module.css';
import { FC } from 'react';
import cn from 'classnames';

interface IProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ConfirmButton: FC<IProps> = ({ text, onClick = () => {}, disabled = false }) => {
  return (
    <button
      className={cn(styles.root, { [styles.disabled]: disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ConfirmButton;
