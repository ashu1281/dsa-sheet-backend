import {
  Checkbox,
  Chip,
  Link,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";

import {
  Article,
  Code,
  PlayCircle,
} from "@mui/icons-material";

import type {
  Question,
} from "../../types/dsa.types";

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

      <TableCell align="center">

        <Tooltip title="Article">

          <Link
            href={
              question.article_link
            }
            target="_blank"
          >
            <Article />
          </Link>

        </Tooltip>

      </TableCell>

      <TableCell align="center">

        <Tooltip title="YouTube">

          <Link
            href={
              question.youtube_link
            }
            target="_blank"
          >
            <PlayCircle />
          </Link>

        </Tooltip>

      </TableCell>

      <TableCell align="center">

        <Tooltip title="Practice">

          <Link
            href={
              question.leetcode_link
            }
            target="_blank"
          >
            <Code />
          </Link>

        </Tooltip>

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

    </TableRow>
  );
};

export default QuestionRow;