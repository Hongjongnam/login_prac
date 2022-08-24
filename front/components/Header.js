import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaUserAlt, FaDownload } from 'react-icons/fa';
import ConnectModal from './ConnectModal';
import axios from "axios"

const Header = () => {
  // const connect = async (e) => {
  //   if (!window.ethereum) throw new Error('Error');
  //   const accounts = await window.ethereum.request({
  //     method: 'eth_requestAccounts',
  //   });
  //   window.location.reload();
  // };
  const Logout = () =>{
    // const result = await axios.post('http://localhost:4000/user/logout', null);
  //   window.localStorage.setItem('AccessToken',undefined)
  //  window.localStorage.removeItem('Team3_Cookie')
  //  alert("Logout")
  //  window.location.href = "http://localhost:3000"
  }

  return (
    <Flex position="fixed" w="full" bg="#0e101c" justifyContent="space-between" px="12" py="2" board-bottom="1px solid">
      <Box>
        <Link href="/" font-color="white">
          <Button size="sm" variant="ghost" color="white">
            NFT Market
          </Button>
        </Link>
      </Box>

      <Box>
        <Link href="/asd">
          <Button size="sm" variant="ghost" color="white">
            경매중물품?
          </Button>
        </Link>
        <Link href="/asd">
          <Button size="sm" variant="ghost" color="white">
            뭐든?
          </Button>
        </Link>
        <Link href="/">
          <Button size="sm" variant="ghost" color="white">
            NFT?
          </Button>
        </Link>
        <Link href="/">
          <Button size="sm" variant="ghost" color="white">
            Defi
          </Button>
        </Link>
        <Link href="/">
          <Button size="sm" variant="ghost" color="white">
            뭐넣지
          </Button>
        </Link>
      </Box>
      <Box>
       {/* { window.localStorage.Team3_Cookie ? (
              <Button size="sm" variant="ghost" color="white" onClick={Logout}>
                log out
              </Button>
        ) : (
          <>
          <ConnectModal />
          <Link href="https://metamask.io/download/">
            <Button size="sm" variant="ghost" color="white">
              <FaDownload />
            </Button>
          </Link>
          </>
        )} */}
         <>
          <ConnectModal />
          <Link href="https://metamask.io/download/">
            <Button size="sm" variant="ghost" color="white">
              <FaDownload />
            </Button>
          </Link>
          </>
      </Box>

      {/* <Box>
        <>
          <Link href="/user/mypage">
            <Button size="sm" variant="ghost" color="white">
              Connect
            </Button>
          </Link>
        <Link href="https://metamask.io/download/">
          <Button size="sm" variant="ghost" color="white">
            metamask download icon // 팝업창으로 띄워야함
          </Button>
        </Link>
        </>

      </Box> */}
    </Flex>
  );
};

export default Header;
