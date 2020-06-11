import styled, { keyframes } from 'styled-components';

const fadeInContainer = keyframes`
  0% {
    opacity: 0.6;
    transform : translateY(-20px)
  }
  100% {
    opacity: 1;
    transform : translateY(0px)
  }
`;

const fadeInImage = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  animation: 700ms ${fadeInContainer} ease-out;
`;

export const Card = styled.div`
  width: 550px;
  min-height: 260px;

  background-color: white;

  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);

  margin-top: 15px;
  padding: 20px;

  h2 {
    font-size: 22px;
    color: #392d2d;

    margin-bottom: 15px;
  }
`;

export const Templates = styled.div`
  width: 100%;
  min-height: 157px;

  background-color: #eee;

  overflow-y: auto;

  padding: 15px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;

  button {
    border: 2px solid transparent;
    margin-right: 10px;
    background-color: transparent;

    animation: 700ms ${fadeInImage} ease-out;

    width: 100px;
    height: 100px;
    img {
      width: 96px;
      height: 96px;

      object-fit: cover;
      object-position: center;
    }

    &.selected {
      border-color: #3672a3;
    }
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;

    border: 1px solid #dbdbdb;

    padding: 0 15px;
    margin-bottom: 10px;

    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;

  border: 0;

  background-color: #4395d8;

  color: white;
  font-weight: bold;
  font-size: 14px;

  transition: background 200ms ease-in;

  &:hover {
    background-color: #3672a3;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 650px;

  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  animation: 700ms ${fadeInContainer} ease-out;
`;

export const MemeImage = styled.img`
  animation: 700ms ${fadeInImage} ease-out;

  max-width: 100%;
  max-height: 100%;
`;
