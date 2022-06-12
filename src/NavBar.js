import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Email from "./assets/social-media-icons/email_32x32.png";


const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            {/* Left Side - Social Media Links */}
            <Flex justify="space-around" width="40%" padding="0 75 ps">
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxsize="42px" margin="0 15px" />
                </Link>
                <Link href="https://www.twitter.com">
                    <Image src={Twitter} boxsize="42px" margin="0 15px" />
                </Link>
                <Link href="https://www.gmail.com">
                    <Image src={Email} boxsize="42px" margin="0 15px" />
                </Link>
            </Flex>

            {/* Right Side - Sections and Connect */}
            <Flex justify="space-between" align="center" width="40%" padding="30px">
                <Box margin="0 15px">About</Box>
                <Spacer />
                <Box margin="0 15px">Mint</Box>
                <Spacer />
                <Box margin="0 15px">Connect</Box>
                <Spacer />

                {isConnected ? (
                    <Box margin="0 15px">Connected</Box>
                    ) : (
                    <Button
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        baxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}
                    >
                        Connect
                    </Button>
                )}
            </Flex>

            {/* Connect */}
            
        </Flex>
    )
};

export default NavBar;
