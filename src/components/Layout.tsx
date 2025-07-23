// src/components/Layout.tsx
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaGear, FaHouse, FaRegCircleUser } from "react-icons/fa6";
import { Outlet, Link as RouterLink } from "react-router";
import { useColorMode } from "./ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const HEADER_HEIGHT = "64px";
const FOOTER_HEIGHT = "56px";

export const Layout = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      {/* ヘッダー */}
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        height={HEADER_HEIGHT}
        bg={{ base: "cyan.100", _dark: "cyan.600" }}
        px={4}
        display="flex"
        alignItems="center"
        zIndex="sticky"
        boxShadow="sm"
        gap={4}
      >
        <Image
          src="/logo.svg"
          alt="ロゴ"
          boxSize="32px" // width/height 両方一気に指定
          objectFit="contain" // はみ出し防止＆いい感じに収める
        />
        <Heading>研修管理ポータル</Heading>
        <Spacer />
        <HStack gap={4}>
          <Text>Welcome! uknown user</Text>
          <RouterLink to="/">
            <IconButton aria-label="Home page" variant="ghost">
              <FaHouse />
            </IconButton>
          </RouterLink>
          <RouterLink to="/account">
            <IconButton aria-label="Account page" variant="ghost">
              <FaRegCircleUser />
            </IconButton>
          </RouterLink>

          <RouterLink to="/admin">
            <IconButton aria-label="Admin page" variant="ghost">
              <FaGear />
            </IconButton>
          </RouterLink>
          <IconButton onClick={toggleColorMode} variant="ghost">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </HStack>
      </Box>

      {/* メインコンテンツ */}
      <Flex
        as="main"
        direction="column"
        minHeight="100vh"
        pt={HEADER_HEIGHT}
        pb={FOOTER_HEIGHT}
      >
        <Container maxW="container.md" py={4}>
          <Outlet />
        </Container>
      </Flex>

      {/* フッター */}
      <Box
        as="footer"
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        height={FOOTER_HEIGHT}
        bg={{ base: "gray.200", _dark: "gray.800" }}
        px={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="sticky"
        boxShadow="sm"
      >
        © Aion. All rights reserved.
      </Box>
    </>
  );
};
