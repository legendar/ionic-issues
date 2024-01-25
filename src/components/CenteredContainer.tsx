import { ReactNode } from 'react';
import './CenteredContainer.css';

interface ContainerProps {
  children: ReactNode;
}

const CenteredContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="centered-container">
      {children}
    </div>
  );
};

export default CenteredContainer;
