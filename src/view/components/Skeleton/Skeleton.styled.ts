import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    background-color: #E1E1E4;
  }
  50% {
    background-color: #F8F9FB;
  }
  100% {
    background-color: #E1E1E4;
  }
`;

const SkeletonWrapper = styled.div`
  width: ${({ theme }) => theme.sizes.BASE_WIDTH};
  height: ${({ theme }) => theme.sizes.BASE_HEIGHT};
  border-radius: ${({ theme }) => theme.borderRadiuses.LARGE};
  min-height: inherit;
  animation: ${pulse} 1s linear infinite;
};  
`;

export { SkeletonWrapper };
