import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/symbol-logo-gray.png';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

const BasicTxt = styled.p`
  color: var(--subtitle-text);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;

const SearchBigBtn = styled.button`
  width: 120px;
  height: 44px;
  border-radius: 44px;
  background-color: var(--main-color);
  color: var(--disabled-text-color);
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17.54px;
  cursor: pointer;
`;

export default function BasicFeed() {
  return (
    <div>
      <FeedContainer>
        <LogoContainer>
          <LogoImg src={Logo} />
        </LogoContainer>
        <BasicTxt>유저를 검색해 팔로우 해보세요!</BasicTxt>
        <SearchBigBtn>검색하기</SearchBigBtn>
      </FeedContainer>
    </div>
  );
}
