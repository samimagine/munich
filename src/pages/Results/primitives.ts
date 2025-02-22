import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const InfoBox = styled.div`
  background-color: #e7f3ff;
  padding: 15px;
  border-left: 5px solid #007bff;
  margin-bottom: 20px;
  text-align: left;
  display: inline-block;
`;

const WarningBox = styled.div`
  background-color: #ffebeb;
  padding: 15px;
  border-left: 5px solid #ff4d4d;
  margin-bottom: 20px;
  text-align: center;
  color: #b30000;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #222;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const Button = styled.button`
  background-color: #2d2dff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #1a1aff;
  }
`;

const RetryButton = styled(Button)`
  background-color: #b30000;

  &:hover {
    background-color: #ff4d4d;
  }
`;
export {
  Container,
  InfoBox,
  WarningBox,
  Table,
  TableHeader,
  TableCell,
  Button,
  RetryButton,
};
