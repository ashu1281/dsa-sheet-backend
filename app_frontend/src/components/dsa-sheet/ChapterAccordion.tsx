import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  LinearProgress,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import QuestionsTable from "./QuestionsTable";

import type {
  Chapter,
} from "../../types/dsa.types";

interface Props {
  chapter: Chapter;

  onToggle: (
    questionId: string,
    completed: boolean
  ) => void;
}

const ChapterAccordion = ({
  chapter,
  onToggle,
}: Props) => {

  const percentage =
    (chapter.completedQuestions /
      chapter.totalQuestions) *
    100;

  return (
    <Accordion key={String(chapter.isExpanded)} defaultExpanded={!!chapter.isExpanded}>

      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon />
        }
      >

        <Box sx={{width:"100%"}}>

          <Typography
            sx={{fontWeight:700}}
          >
            {chapter.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {
              chapter.completedQuestions
            }
            /
            {
              chapter.totalQuestions
            }{" "}
            Completed
          </Typography>

          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              mt: 1,

              borderRadius: 5,

              height: 8,
            }}
          />

        </Box>

      </AccordionSummary>

      <AccordionDetails>

        <QuestionsTable
          questions={
            chapter.questions
          }
          onToggle={onToggle}
        />

      </AccordionDetails>

    </Accordion>
  );
};

export default ChapterAccordion;