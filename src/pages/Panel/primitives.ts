import styled from "styled-components";

export const PanelContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 220px;
  background: white;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 90px;
`;

export const SidebarTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const SidebarButton = styled.button<{ active?: boolean }>`
  background: ${(props) => (props.active ? "#2d2dff" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#000")};
  border: none;
  padding: 10px;
  text-align: left;
  cursor: pointer;
  margin: 5px 0;
  &:hover {
    background: #ddd;
  }
`;

export const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
`;

export const SearchInput = styled.input`
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
`;

export const TableHeader = styled.th`
  background: #f4f4f4;
  padding: 10px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Button = styled.button`
  background: #2d2dff;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

export const RetryButton = styled(Button)`
  background: #d9534f;
  margin-top: 10px;
`;
