import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  background-color: #484848;
  border-radius: 15px;
  overflow: hidden;
`;
export const PosterContainer = styled.div`
  width: 120px;
  height: 100%;
  color: #ededed;
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardContentContainer = styled.div`
  width: 50%;
  height: 100%;
  color: #ededed;
  display: block;
  padding: 10px;
  text-align: center;
`;

export const TextContainer = styled.div`
  margin-bottom: 10px;
  display: block;
`;

export const Text = styled.span`
  font-weight: bold;
`;
