import React from "react";

const commentsData = [
  {
    id: 1,
    name: "Roy",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      { id: 2, name: "Dwayne", text: "I completely agree with this.", replies: [] },
      { id: 3, name: "Rock", text: "Interesting point!", replies: [] },
      { id: 4, name: "Bruce", text: "Well said!", replies: [] },
    ],
  },
  {
    id: 5,
    name: "Maxx",
    text: "This is an insightful comment!",
    replies: [
      { id: 6, name: "Kate", text: "I love this discussion.", replies: [] },
      {
        id: 7,
        name: "Sam",
        text: "What do you think about this?",
        replies: [
          { id: 8, name: "Dexter", text: "Great point!", replies: [] },
          { id: 9, name: "Sheldon", text: "I have some doubts.", replies: [] },
          { id: 10, name: "Joe", text: "Let's discuss further.", replies: [] },
        ],
      },
      { id: 11, name: "Chris", text: "Absolutely!", replies: [] },
    ],
  },
  { id: 12, name: "Max", text: "Nice explanation!", replies: [] },
  { id: 13, name: "Evans", text: "Thanks for sharing.", replies: [] },
  {
    id: 14,
    name: "Sojin",
    text: "This makes a lot of sense.",
    replies: [
      { id: 15, name: "Brad", text: "I support this idea.", replies: [] },
      { id: 16, name: "Leonardo", text: "Well explained!", replies: [] },
      { id: 17, name: "Lorem", text: "Very informative!", replies: [] },
    ],
  },
];

export const Comment = ({ data }) => {
  const { text, name } = data;

  return (
    <div className="flex items-start gap-3 bg-gray-100 p-3 rounded-lg shadow-sm">
      <img
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

export const CommentList = ({ comments }) => {
  return (
    <div className="flex flex-col gap-3">
      {comments.map((comment) => (
        <div key={comment.id} className="flex flex-col gap-3">
          <Comment data={comment} />
          {comment.replies.length > 0 && (
            <div className="ml-6 pl-4 border-l-2 border-gray-300">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="w-full md:w-4/5 flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-bold text-gray-800">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
