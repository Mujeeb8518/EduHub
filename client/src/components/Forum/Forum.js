import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './Forum.css';

const Forum = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestionText, setNewQuestionText] = useState('');
    const [answerText, setAnswerText] = useState('');

    const handleQuestionInputChange = (event) => {
        setNewQuestionText(event.target.value);
    };

    const handleAnswerInputChange = (event) => {
        setAnswerText(event.target.value);
    };

    const addQuestion = () => {
        if (newQuestionText.trim() !== '') {
            const newQuestion = { id: questions.length + 1, text: newQuestionText, answers: [] };
            setQuestions([...questions, newQuestion]);
            setNewQuestionText('');
        }
    };

    const addAnswer = (questionId) => {
        const updatedQuestions = questions.map(question =>
            question.id === questionId
                ? { ...question, answers: [...question.answers, answerText] }
                : question
        );
        setQuestions(updatedQuestions);
        setAnswerText('');
    };

    return (
        <div>
            <div className="p-inputgroup">
                <InputText
                    placeholder="Enter your question"
                    value={newQuestionText}
                    onChange={handleQuestionInputChange}
                    className="forum-input"
                />
                <Button label="Add Question" onClick={addQuestion} className="forum-button" />
            </div>

            {questions.map(question => (
                <div key={question.id} className="forum-question">
                    <h3>{question.text}</h3>
                    <div className="p-inputgroup">
                        <InputText
                            placeholder="Enter your answer"
                            value={answerText}
                            onChange={handleAnswerInputChange}
                            className="forum-answer-input"
                        />
                        <Button label="Add Answer" onClick={() => addAnswer(question.id)} className="forum-answer-button" />
                    </div>
                    <ul className="forum-answer-list">
                        {question.answers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Forum;