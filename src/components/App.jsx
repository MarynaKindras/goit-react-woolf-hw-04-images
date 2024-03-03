import React, { useState, useEffect } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchImages } from './api';

import { MainWrapper, Container, LoaderWrap } from './App.styled';

export const App = () => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasMorePages, setHasMorePages] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');

  useEffect(() => {
    if (query !== '') {
      async function getPics() {
        setIsLoading(true);
        try {
          const result = await fetchImages(query, page);
          if (result.hits.length === 0) {
            setStatus('rejected');
          } else {
            setPictures(pictures => [...pictures, ...result.hits]);
            setStatus('resolved');
            setHasMorePages(page < Math.ceil(result.totalHits / 12));
          }
        } catch (error) {
          console.log(error);
          setStatus('rejected');
        }
        setIsLoading(false);
      }

      getPics();
    }
  }, [page, query]);

  const onBtnClick = async () => {
    setPage(page => page + 1);
    setIsLoading(true);
  };

  const addPictures = ({ query }) => {
    setQuery(query);
    setPictures([]);
    setPage(1);
    setStatus('pending');
    setHasMorePages(false);
  };
  const onImageClick = (imageUrl, imageAlt) => {
    setIsModalVisible(true);
    setModalImageAlt(imageAlt);
    setModalImageUrl(imageUrl);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <MainWrapper>
      <Modal
        isVisible={isModalVisible}
        imageUrl={modalImageUrl}
        alt={modalImageAlt}
        onClose={closeModal}
      />
      <Searchbar onSubmit={addPictures} />
      {status === 'rejected' && <div>Something went wrong</div>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <Container>
          <ImageGallery items={pictures} onClick={onImageClick} />
          {isLoading && (
            <LoaderWrap>
              <Loader />
            </LoaderWrap>
          )}
          {hasMorePages && <Button onLoadMoreBtnClick={onBtnClick} />}
        </Container>
      )}
    </MainWrapper>
  );
};
