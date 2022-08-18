import styled from 'styled-components';

const MenuWrapper = styled.div`
  color: ${({ theme }) => theme.fontColors.PRIMARY};

  width: 200px;
  height: ${({ theme }) => theme.sizes.FIT_CONTENT};

  padding: ${({ theme }) => theme.paddings.SUPER_TINY};

  border-right: 1px solid;
`;

export { MenuWrapper };
