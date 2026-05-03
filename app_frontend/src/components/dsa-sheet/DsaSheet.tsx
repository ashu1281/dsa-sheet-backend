import {
  Stack,
} from "@mui/material";

import ChapterAccordion from "./ChapterAccordion";

import type{
  Chapter,
} from "../../types/dsa.types";

interface Props {
  chapters: Chapter[];

  onToggle: (
    questionId: string,
    completed: boolean
  ) => void;
}

const DsaSheet = ({
  chapters,
  onToggle,
}: Props) => {

  return (
    <Stack sx={{width:'100%'}}>

      {chapters.map(
        (chapter) => (
          <ChapterAccordion
            key={chapter.id}
            chapter={chapter}
            onToggle={onToggle}
          />
        )
      )}

    </Stack>
  );
};

export default DsaSheet;