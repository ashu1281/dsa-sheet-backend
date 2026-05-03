export interface Company {
  id: string;

  name: string;

  logo_link: string;
}

export interface Question {
  id: string;

  name: string;

  level: string;

  article_link: string;

  youtube_link: string;

  leetcode_link: string;

  completed: boolean;

  companies: Company[];
}

export interface Chapter {
  id: string;

  name: string;

  totalQuestions: number;

  completedQuestions: number;

  questions: Question[];
}

export interface LevelProgress {
  level: string;

  total_questions: string;

  completed_questions: string;
}