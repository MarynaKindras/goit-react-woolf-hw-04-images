import React, { useState } from 'react';

import {
  Header,
  Form,
  FormWrapper,
  SearchBtn,
  SearchInput,
} from './Searchbar.styled';

import { CiSearch } from 'react-icons/ci';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    onSubmit({ query: query });
    setQuery('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <FormWrapper>
          <SearchBtn type="submit">
            <CiSearch />
          </SearchBtn>
          <SearchInput
            type="text"
            name="search"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleQueryChange}
          />
        </FormWrapper>
      </Form>
    </Header>
  );
};
