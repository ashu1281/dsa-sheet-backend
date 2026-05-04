import {
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Box,
  Container,
} from "@mui/material";

import Header from "../components/header/Header";

import DsaSheet from "../components/dsa-sheet/DsaSheet";

import { getDSASheet } from "../services/dsa.service";

import { getLevelCounts, updateQuestionProgress } from "../services/progress.service";

import type {
  Chapter,
  LevelProgress,
} from "../types/dsa.types";
import HeroCard from "../components/dsa-sheet/HeroCard";
import { AuthContext } from "../contexts/auth.context";

const HomePage = () => {

  const [chapters, setChapters] =
    useState<Chapter[]>([]);

  const [search, setSearch] =
    useState("");

  const [levelCounts, setLevelCounts] =
    useState<LevelProgress[]>([]);

  const { user } = useContext(
    AuthContext
  );



  useEffect(() => {
    const fetchDSAData =
      async () => {

        try {
          const response =
            await getDSASheet();

          setChapters(
            response.data
          );
        } catch (error) {
          console.error(error);
        }
      };
    fetchDSAData();


    const fetchLevelCounts =
      async () => {

        try {

          const response =
            await getLevelCounts();

          setLevelCounts(
            response.data
          );

        } catch (error) {
          console.error(error);
        }
      };
    fetchLevelCounts();
  }, []);

  const easyData =
    levelCounts.find(
      (item) =>
        item.level === "Easy"
    );

  const mediumData =
    levelCounts.find(
      (item) =>
        item.level === "Medium"
    );

  const hardData =
    levelCounts.find(
      (item) =>
        item.level === "Hard"
    );
  const handleToggle =
    async (
      questionId: string,
      completed: boolean
    ) => {

      try {

        let updatedLevel = "";

        await updateQuestionProgress(
          questionId,
          completed
            ? "DONE"
            : "PENDING"
        );

        setChapters((prev) =>
          prev.map((chapter) => {

            let completedCount = 0;

            const updatedQuestions =
              chapter.questions.map(
                (question) => {

                  if (
                    question.id ===
                    questionId
                  ) {

                    question.completed =
                      completed;

                    updatedLevel =
                      question.level;
                  }

                  if (
                    question.completed
                  ) {
                    completedCount++;
                  }

                  return question;
                }
              );

            return {
              ...chapter,

              completedQuestions:
                completedCount,

              questions:
                updatedQuestions,
            };
          })
        );

        setLevelCounts((prev) =>
          prev.map((item) => {

            if (
              item.level !==
              updatedLevel
            ) {
              return item;
            }

            return {
              ...item,

              completed_questions: String(
                completed
                  ? Number(
                    item.completed_questions
                  ) + 1
                  : Number(
                    item.completed_questions
                  ) - 1
              ),
            };
          })
        );

      } catch (error) {
        console.error(error);
      }
    };

  const filteredChapters =
    useMemo(() => {

      if (!search) {
        return chapters;
      }

      return chapters
        .map((chapter) => ({
          ...chapter,
          isExpanded: true,
          questions:
            chapter.questions.filter(
              (question) => {

                const questionMatch =
                  question.name
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    );

                const companyMatch =
                  question.companies.some(
                    (company) =>
                      company.name
                        .toLowerCase()
                        .includes(
                          search.toLowerCase()
                        )
                  );

                return (
                  questionMatch ||
                  companyMatch
                );
              }
            ),
        }))
        .filter(
          (chapter) =>
            chapter.questions.length >
            0
        );

    }, [chapters, search]);

  return (
    <Box>

      <Header
        search={search}
        setSearch={setSearch}
        userName={user?.name ?? ""}
      />

      <Container
        sx={{
          py: 4,
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '80%',
          flexDirection: 'column',
        }}
      >
        <HeroCard
          userName={user?.name ?? ""}
          easy={`${easyData?.completed_questions || 0}/${easyData?.total_questions || 0}`}
          medium={`${mediumData?.completed_questions || 0}/${mediumData?.total_questions || 0}`}
          hard={`${hardData?.completed_questions || 0}/${hardData?.total_questions || 0}`}
        />
        <DsaSheet
          chapters={
            filteredChapters
          }
          onToggle={
            handleToggle
          }
        />

      </Container>

    </Box>
  );
};

export default HomePage;