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

/* ① 共通プロップを 1 か所で宣言 */
const cardProps = {
  cursor: "pointer",
  transition: "all 0.15s ease",
  _hover: {
    shadow: "md",
    bg: "gray.50",
    transform: "translateY(-2px)",
  },
};

/* ② ぜんぶ配列で管理（セクションごとに分けても OK） */
const sections = [
  {
    title: "お知らせ",
    items: [
      { label: "新規追加", to: "/admin/notify/new" },
      { label: "変更", to: "/admin/notify/edit" },
    ],
  },
  {
    title: "研修管理",
    items: [
      { label: "研修一覧", to: "/admin/training" },
      { label: "新規追加", to: "/admin/training/new" },
    ],
  },
  {
    title: "受講履歴",
    items: [{ label: "履歴一覧", to: "/admin/history" }],
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
                as={RouterLink} /* ③ 外側ラッパー不要！ */
                size="sm"
                {...cardProps}
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
