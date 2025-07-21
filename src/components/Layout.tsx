// src/components/Layout.tsx
import { Box, Container, Flex } from "@chakra-ui/react";
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
      >
        固定Headerだよ💫
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
        固定Footerだよ🦋
      </Box>
    </>
  );
};
