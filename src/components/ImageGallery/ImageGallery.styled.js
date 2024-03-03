import styled from 'styled-components';

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 1240px;
  gap: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
`;

export const GalleryItem = styled.li`
  position: relative;
  min-width: 240px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  flex-basis: calc((100% - 10px) / 5);
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
`;
