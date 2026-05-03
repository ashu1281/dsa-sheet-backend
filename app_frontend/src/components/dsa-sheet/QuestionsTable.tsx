import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import QuestionRow from "./QuestionRow";

import type { Question } from "../../types/dsa.types";

interface Props {
  questions: Question[];

  onToggle: (
    questionId: string,
    completed: boolean
  ) => void;
}

const QuestionsTable = ({
  questions,
  onToggle,
}: Props) => {

  return (
    <TableContainer>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>
              Status
            </TableCell>

            <TableCell>
              Question
            </TableCell>

            <TableCell>
              Level
            </TableCell>

            <TableCell>
              Links
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {questions.map(
            (question) => (
              <QuestionRow
                key={question.id}
                question={
                  question
                }
                onToggle={
                  onToggle
                }
              />
            )
          )}

        </TableBody>

      </Table>

    </TableContainer>
  );
};

export default QuestionsTable;