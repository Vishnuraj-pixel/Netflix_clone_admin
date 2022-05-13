import styled from "styled-components";

const Table = styled.table`
  width: 750px;
  border-collapse: collapse;
  margin: 50px auto;
  tr:nth-of-type(odd) {
    background: #eee;
  }
  th {
    background: var(--primary-500);
    color: white;
    font-weight: bold;
  }
  td,
  th {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 18px;
  }
`;

export default Table;
