// src/components/CardComponent.tsx
import { Card, Tag } from "@chakra-ui/react";
import type { CardData } from "@/types";

/* ★ カテゴリーごとに base / _dark の色を指定 */
type Category = NonNullable<CardData["category"]>;

const bgByCategory: Record<Category, { base: string; _dark: string }> = {
  infra: { base: "blue.50", _dark: "blue.900" },
  app: { base: "green.50", _dark: "green.900" },
  business: { base: "yellow.50", _dark: "yellow.800" },
  it: { base: "cyan.50", _dark: "cyan.900" },
  other: { base: "gray.50", _dark: "gray.800" },
};

export const CardComponent = ({
  title,
  description,
  category = "other",
  tags = [],
}: CardData) => (
  <Card.Root bg={bgByCategory[category]} w="250px" h="160px">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
    </Card.Body>
    {/* タグがあればフッターを描画 */}
    {tags.length !== 0 && (
      <Card.Footer>
        {tags.map((tag) => (
          <Tag.Root key={tag}>
            <Tag.Label>{tag}</Tag.Label>
          </Tag.Root>
        ))}
      </Card.Footer>
    )}
  </Card.Root>
);
