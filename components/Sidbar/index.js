import React,{useState,useEffect,useRef} from 'react';
import { Avatar, AvatarBadge, Box, Button, Flex, Stack } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr'
import { FaSignOutAlt,FaSignInAlt } from 'react-icons/fa'
import { BsFilterCircle,BsFillSunFill } from 'react-icons/bs'
import { MdOutlineDarkMode } from 'react-icons/md'
import { auth } from '../../config/firebase/connectingFirebase';
import { onAuthStateChanged } from "firebase/auth"
import { authGoogle, signOutGoogle } from '../../utils/authentication/auth';


const SidBar = () => {

    const [login,setLogin] = useState('');

    const [hamburger,setHamburger] = useState(false);

    const [showUser,setShowUser] = useState(false);
   
    const [showFilter,setShowFilter] = useState(false);

    const [showDarkMode,setShowDarkMode] = useState(false);


    useEffect(()=>{
      onAuthStateChanged(auth, (u)=>{
            setLogin(u);
      })
    },[])

    console.log(login)
   
    const handlerHamburger = () => setHamburger(!hamburger)
   
    const handlerUser = () => setShowUser(!showUser)
    
    const handlerFilter = () => setShowFilter(!showFilter)

    const handlerDarkMode = () => setShowDarkMode(!showDarkMode)

    const handlerLogin = ()=>{
        authGoogle();
      }

      const handlerSair = () =>{
        signOutGoogle();
      }



    return (
        <>
        <Box
        w={'100%'}
        maxWidth={'70px'}
        minHeight={'100vh'}
        bg={'#ccc'}
        py={'1rem'}
        >
            <Flex
            w={'40px'}
            h={'40px'}
            justify={'center'}
            align={'center'}
            borderRadius={'50%'}
            mx={'auto'}
            bg={'#fff'}
            cursor={'pointer'}
            onClick={handlerHamburger}
            transition={'1s ease-in-out'}
            boxShadow={'0 10px 10px 0 rgba(0,0,0,.25)'}
            _hover={{
                backgroundColor: '#fff',
                transform:'scale(1.05)'
            }}
            >
                  <Box 
                    display={hamburger ? 'none' : 'flex'}
                   >
                       <GiHamburgerMenu />
                   </Box>
                   <Box
                        display={hamburger ? 'flex' : 'none'}
                    >
                       <GrClose/>
                    </Box>
                   
            </Flex>
            <Flex
            w={'60px'}
            p={'1rem'}
            borderRadius={'40px 0 0 40px'}
            bg={'red'}
            mt={'1.5rem'}
            ml={'auto'}
            position={'relative'}
            align={'center'}
            >   
            <Stack direction='row' spacing={4}>
            <Avatar 
                    cursor={'pointer'}
                    w={'35px'}
                    h={'35px'}
                    transition={'1s ease-in-out'}
                    src={login ? login.photoURL : ''}
                    onClick={handlerUser}
                    _hover={{
                        transform:'scale(1.08)'
                    }}
             >
                  <AvatarBadge boxSize='.8em' bg={login ? 'green.500' : 'red'} border={'2px solid #fff'} />
                  </Avatar>
            </Stack>
             
             <Flex 
                position={'absolute'}
                bg={'red'}
                p={'.8rem'}
                right={'-9.25rem'}
                borderRadius={'0 40px 40px 0'}
                display={showUser ? 'flex' : 'none'}
             >
                 <Flex
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    bg={'#fff'}
                    color={'red'}
                    align={'center'}
                    justify={'center'}
                    cursor={'pointer'}
                    transition={'1s ease-in-out'}
                    _hover={{
                        transform:'scale(1.08)'
                    }}
                 >
                        {
                                login ? <FaSignOutAlt onClick={handlerSair}/>:<FaSignInAlt onClick={handlerLogin}/>
                        }
                 </Flex>
                 <Flex
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    bg={'#fff'}
                    color={'red'}
                    mx={'1rem'}
                    align={'center'}
                    justify={'center'}
                    cursor={'pointer'}
                    onClick={handlerFilter}
                    transition={'1s ease-in-out'}
                    _hover={{
                        transform:'scale(1.08)'
                    }}
                 >
                     <BsFilterCircle/>
                 </Flex>
                 <Flex
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    bg={'#fff'}
                    color={'red'}
                    align={'center'}
                    justify={'center'}
                    cursor={'pointer'}
                    onClick={handlerDarkMode}
                    transition={'1s ease-in-out'}
                    _hover={{
                        transform:'scale(1.08)'
                    }}
                 >
                  { showDarkMode ?  <MdOutlineDarkMode/> : <BsFillSunFill/>}
                 </Flex>
             </Flex>
            </Flex>
        </Box>

        </>
    );
}

export default SidBar;
