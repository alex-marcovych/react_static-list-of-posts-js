import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    );
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
