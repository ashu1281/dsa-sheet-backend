import {
  Checkbox,
  Chip,
  Link,
  Stack,
  TableCell,
  TableRow,
} from "@mui/material";

import {
  Article,
  Code,
  PlayCircle,
} from "@mui/icons-material";

import type { Question } from "../../types/dsa.types";

interface Props {
  question: Question;

  onToggle: (
    questionId: string,
    completed: boolean
  ) => void;
}

const QuestionRow = ({
  question,
  onToggle,
}: Props) => {

  return (
    <TableRow hover>

      <TableCell>
        <Checkbox
          checked={
            question.completed
          }
          onChange={(e) =>
            onToggle(
              question.id,
              e.target.checked
            )
          }
        />
      </TableCell>

      <TableCell>
        {question.name}
      </TableCell>

      <TableCell>
        <Chip
          size="small"
          label={question.level}
          color={
            question.level ===
            "Easy"
              ? "success"
              : question.level ===
                "Medium"
              ? "warning"
              : "error"
          }
        />
      </TableCell>

      <TableCell>
        <Stack
          direction="row"
          spacing={1}
        >

          <Link
            href={
              question.article_link
            }
            target="_blank"
          >
            <Article />
          </Link>

          <Link
            href={
              question.youtube_link
            }
            target="_blank"
          >
            <PlayCircle />
          </Link>

          <Link
            href={
              question.leetcode_link
            }
            target="_blank"
          >
            <Code />
          </Link>

        </Stack>
      </TableCell>

    </TableRow>
  );
};

export default QuestionRow;