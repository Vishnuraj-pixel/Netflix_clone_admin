import styled from "styled-components";

function Loading() {
  return <Load />;
}

const Load = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 4px solid var(--grey-400);
  border-radius: 50%;
  border-top-color: var(--primary-500);
  animation: spinner 2s linear infinite;
`;

export default Loading;
