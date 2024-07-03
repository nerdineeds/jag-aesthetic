'use client';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface Question {
  question: string;
  answer: string;
  id: number;
}

interface QuestionsProps {
  questions: Question[];
}

interface OpenQuestionsState {
  [key: number]: boolean;
}

const FactsAndQuestions: React.FC<QuestionsProps> = ({
  questions,
}) => {
  const [openQuestions, setOpenQuestions] =
    useState<OpenQuestionsState>({});

  const toggleQuestion = (id: number): void => {
    setOpenQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="py-12 w-full mx-auto max-w-5xl">
      <h2 className="text-2xl font-medium tracking-tight pb-4">
        Frequently asked questions
      </h2>
      <div className="w-full bg-slate-100 p-3 rounded-3xl grid md:grid-cols-2 gap-4">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => toggleQuestion(question.id)}
            className="bg-white shadow-md py-2 px-4 rounded-2xl mb-2 w-full cursor-pointer"
          >
            <h3 className="flex justify-between items-center py-4 font-medium transition-all">
              {question.question}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-3 h-3 transition-transform ${
                  openQuestions[question.id] ? 'rotate-180' : ''
                }`}
              />
            </h3>
            {openQuestions[question.id] && (
              <div className="text-base text-muted-foreground transition-all p-2">
                {questions[0].answer[0].children[0].text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsAndQuestions;
