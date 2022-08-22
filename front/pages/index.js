import { Input } from '@chakra-ui/react';
import React from 'react';
import useAccount from '../hooks/useAccount';

const index = () => {
  const { account } = useAccount();

  if (!account == null) return '123';

  return <></>;
};

export default index;
