import {
  Box,
  Card,
  Heading,
  Stack,
  HStack,
  Text,
  Spacer,
  Separator,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { FaAngleRight } from "react-icons/fa6";

const sections = [
  {
    title: "お知らせ📢",
    items: [
      { label: "新規追加🆕", to: "/admin/notify/new" },
      { label: "お知らせ一覧📘", to: "/admin/notify/edit" },
    ],
  },
  {
    title: "研修管理🎓",
    items: [
      { label: "新規追加🆕", to: "/admin/training/new" },
      { label: "研修一覧📘", to: "/admin/training" },
    ],
  },
  {
    title: "受講履歴📖",
    items: [{ label: "履歴一覧📘", to: "/admin/history" }],
  },
];

export const Admin = () => (
  <Box
    p={6}
    borderWidth="1px"
    borderColor="gray.300"
    rounded="lg"
    shadow="sm"
    mx="auto"
    maxW="600px"
  >
    {sections.map(({ title, items }, idx) => (
      <Box key={title} mb={idx !== sections.length - 1 ? 6 : 0}>
        {/* 見出し */}
        <Heading size="md" mb={3}>
          {title}
        </Heading>

        {/* カードリスト */}
        <Stack>
          {items.map(({ label, to }) => (
            <RouterLink to={to}>
              <Card.Root
                key={to}
                size="sm"
                _hover={{
                  shadow: "md",
                  bg: "gray.50",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.15s ease"
              >
                <Card.Body>
                  <HStack>
                    <Text>{label}</Text>
                    <Spacer />
                    <FaAngleRight />
                  </HStack>
                </Card.Body>
              </Card.Root>
            </RouterLink>
          ))}
        </Stack>

        {/* 最後のセクション以外に区切り線 */}
        {idx !== sections.length - 1 && <Separator mt={6} />}
      </Box>
    ))}
  </Box>
);
