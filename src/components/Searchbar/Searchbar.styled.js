import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: rgb(35, 128, 168);
  z-index: 2;
`;
export const Form = styled.form`
  width: 340px;
  position: relative;
  display: flex;
`;

export const FormWrapper = styled.div`
  position: relative;
`;

export const SearchBtn = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  &:hover {
    fill: #212121;
  }
`;
export const SearchInput = styled.input`
  width: 250px;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 5px 8px 5px 30px;
`;
