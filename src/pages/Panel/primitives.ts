import styled from "styled-components";

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column; /* Mobile-first */
  height: 100vh;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  border-bottom: 1px solid black;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  min-width: 180px;
  background: white;
  border-bottom: 1px solid black;
  padding: 15px;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 220px;
    border-right: 1px solid black;
    border-bottom: none;
    margin-top: 80px;
    align-items: flex-start;
  }
`;

export const TopBar = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 24px;
  gap: 24px;
  justify-content: center;
  background: white;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const TopBarButton = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &.active {
    background-color: #333;
    color: white;
    font-weight: bold;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const SearchInput = styled.input`
  padding: 8px;
  width: 100%;
  max-width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 1024px) {
    margin-top: 80px;
  }
`;

export const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const ContentBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoBox = styled.div`
  background-color: #e7f3ff;
  padding: 15px;
  border-left: 5px solid #007bff;
  margin-bottom: 20px;

  p {
    line-height: 1;
  }
`;

export const WarningBox = styled.div`
  background-color: #ffebeb;
  color: #d9534f;
  padding: 15px;
  border-left: 5px solid #d9534f;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  overflow-x: auto;
  display: block;
`;

export const TableHeader = styled.th`
  background: #f4f4f4;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  text-align: center;
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  text-align: right;
`;
export const TableCellNoWrap = styled(TableCell)`
  white-space: nowrap;
`;

export const Button = styled.button`
  background: #2d2dff;
  color: white;
  padding: 5px;
  border: none;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  width: 60px;
`;

export const RetryButton = styled(Button)`
  background: #d9534f;
  margin-top: 10px;
`;
