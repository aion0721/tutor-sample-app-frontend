import { Card, Tag } from "@chakra-ui/react";
import type { CardData } from "@/types";

/* === カテゴリー定義 & 色マップ =============================== */
type Category = NonNullable<CardData["category"]>;

const bgByCategory: Record<Category, { base: string; _dark: string }> = {
  infra: { base: "blue.50", _dark: "blue.900" },
  app: { base: "green.50", _dark: "green.900" },
  business: { base: "yellow.50", _dark: "yellow.800" },
  it: { base: "cyan.50", _dark: "cyan.900" },
  other: { base: "gray.50", _dark: "gray.800" },
};

/* === Component ============================================= */
export const CardComponent = ({
  title,
  description,
  category = "other",
  tags = [],
}: CardData) => (
  <Card.Root
    bg={bgByCategory[category]} // ライト／ダーク自動切替✨
    w="250px"
    h="160px"
    _hover={{ shadow: "md" }}
  >
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
    </Card.Body>

    {tags.length !== 0 && (
      <Card.Footer gap={2}>
        {tags.map((tag) => (
          <Tag.Root key={tag} variant="solid" size="sm">
            <Tag.Label>{tag}</Tag.Label>
          </Tag.Root>
        ))}
      </Card.Footer>
    )}
  </Card.Root>
);
