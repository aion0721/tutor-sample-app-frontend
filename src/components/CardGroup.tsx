import {
  ButtonGroup,
  HStack,
  IconButton,
  Pagination,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { CardComponent } from "./Card";
import type { CardData } from "@/types";

const pageSize = 4;

type CardGroupProps = {
  items: CardData[];
};

const CardGroup = ({ items }: CardGroupProps) => {
  const [page, setPage] = useState(1);

  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;

  const visibleItems = items.slice(startRange, endRange);

  return (
    <VStack gap={4}>
      <HStack>
        {visibleItems.map((item, index) => (
          <CardComponent key={index} {...item} />
        ))}
      </HStack>
      <Pagination.Root
        count={items.length}
        pageSize={pageSize}
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </VStack>
  );
};

export default CardGroup;
