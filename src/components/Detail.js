import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail() {
  const { name } = useParams();

  //params: undefined ???????
  console.log('params:::' + name);
  
  return (
    <StyledWrap>Detail상세페이지</StyledWrap>
  )
}

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.875rem 1.75rem;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export default Detail;