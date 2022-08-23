import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Image,
  Flex,
  Link,
  useToast,
} from '@chakra-ui/react';
import { FaUserAlt, FaDownload } from 'react-icons/fa';
import axios from 'axios';
import Router, { useRouter } from 'next/router';

const ConnectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const connect = async () => {
    try {
      if (!window.ethereum) throw new Error('Error');
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts && Array.isArray(accounts)) {
        const result = await axios.post('http://localhost:4000/user/login', accounts);
        console.log(result.data.error);
        if (result.data.error == false) {
          window.localStorage.setItem('Team3_Cookie', result.data.jwt_token);
          window.location.reload();
          alert('로그인됐음');
        } else {
          // Router.push('http://localhost:3000/user/regist');
          window.location.href = 'http://localhost:3000/user/regist';
          alert('회원가입 부탁드립니다.');
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>
        <FaUserAlt />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" padding="20">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" borderBottom="1px solid #ccc">
            Connect to a Wallet
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <Flex>
              <Box justifyContent="space-between" alignItems="center" display="flex" width="100%" py={12} mb={12}>
                <Button width="250px" height="250px" size="xl" border="1px solid #ccc">
                  <Link>
                    <Image src="https://dappstore.me/static/media/acent-metawallet.ed5a1bd5.png" />
                  </Link>
                </Button>
                {/* <div>
                  <ul>
                    <li>* WEB-3 Rendering for ERC(ETH), TRC(TRX) Networks</li>
                    <li>* Crypto wallet for ETH, TRX, BSC, and more </li>
                    <li>* No centralized private wallet information gathering</li>
                  </ul>
                </div> */}
                <Button width="250px" height="250px" size="xl" border="1px solid #ccc" onClick={(e) => connect()}>
                  <Image src="data:image/png;base64,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" />
                </Button>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectModal;
