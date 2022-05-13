import styled from "styled-components";

const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--grey-200);
  background: var(--white);
  z-index: 999999;
  border-radius: var(--borderRadius);
  height: 560px;
  width: 400px;
  scrollbar-width: thin;
  scrollbar-color: #6969dd #e0e0e0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--dark-gray);
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--extra-gray);
    border-radius: var(--borderRadius);
  }
  .modal {
    overflow: auto;
    outline: none;
    padding: 1rem;
    .heading {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: relative;
      h1 {
        font-size: 25px;
        text-align: center;
      }
      .closeBtn {
        float: right;
        color: var(--primary-500);
        font-size: 2rem;
        position: absolute:
        top: 2px;
      }
      .closeBtn:hover {
        cursor: pointer;
        color: var(--primary-700);
      }
    }
    .inputWrapper {
      display: flex;
      .form-control {
        height: 35px;
        width: 100%;
        padding: 0.375rem 0.75rem;
        background: var(--backgroundColor);
        border: 1px solid var(--grey-200);
        border-top-left-radius: var(--borderRadius);
        border-bottom-left-radius: var(--borderRadius);
      }
      .input-button {
        border: none;
        align-items: center;
        text-align: center;
        padding-top: 4px;
        cursor: pointer;
        background: var(--primary-500);
        border: transparent;
        letter-spacing: var(--letterSpacing);
        transition: var(--transition);
        text-transform: capitalize;
        display: inline-block;
        border-top-right-radius: var(--borderRadius);
        border-bottom-right-radius: var(--borderRadius);
        .icon {
          color: #fff;
          font-size: 28px;
        }
      }
    }
    .updateButton,
    .resetButton {
      float: right;
    }
  }
  .hide {
    display: none;
  }
`;

export default Container;