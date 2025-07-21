// src/components/Layout.tsx
import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";
import type { ReactNode } from "react";

const HEADER_HEIGHT = "64px";
const FOOTER_HEIGHT = "56px";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
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
        bg="blue.600"
        color="white"
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
      </Box>

      {/* メインコンテンツ */}
      <Flex
        as="main"
        direction="column"
        minHeight="100vh"
        pt={HEADER_HEIGHT}
        pb={FOOTER_HEIGHT}
        bg="gray.50"
      >
        <Container maxW="container.md" py={4}>
          {children}
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
        bg="gray.800"
        color="white"
        px={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="sticky"
        boxShadow="sm"
      >
        aion all rights reservred.
      </Box>
    </>
  );
};
