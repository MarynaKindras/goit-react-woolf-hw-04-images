import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onLoadMoreBtnClick }) => {
  return (
    <LoadMoreBtn type="button" name="load" onClick={onLoadMoreBtnClick}>
      Load more
    </LoadMoreBtn>
  );
};
