import React from "react";
import { useFundedStore } from "../../store/useFundedStore";
import { useNavigate } from "react-router-dom";
import {
  PanelContainer,
  Sidebar,
  TopBarButton,
  MainContent,
  TopBar,
  SearchInput,
  ContentBox,
  InfoBox,
  WarningBox,
  Table,
  TableHeader,
  TableCell,
  TableCellNoWrap,
  Button,
  RetryButton,
  LogoContainer,
} from "./primitives";
import { Logo } from "../../primitives";
import logo from "../../assets/logo_black.png";

const Panel: React.FC = () => {
  const { fundingResults, state, company_size, areas, grant, revenue } =
    useFundedStore();
  const navigate = useNavigate();

  return (
    <PanelContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>
      <Sidebar>
        <SearchInput type="text" placeholder="Search" />
      </Sidebar>
      <MainContent>
        <TopBar>
          <TopBarButton
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </TopBarButton>
          <TopBarButton
            onClick={() => navigate("/identify")}
            className={location.pathname === "/munich/results" ? "active" : ""}
          >
            Identify
          </TopBarButton>
          <TopBarButton
            onClick={() => navigate("/apply")}
            className={location.pathname === "/apply" ? "active" : ""}
          >
            Apply
          </TopBarButton>
          <TopBarButton
            onClick={() => navigate("/manage")}
            className={location.pathname === "/manage" ? "active" : ""}
          >
            Manage
          </TopBarButton>
        </TopBar>
        <ContentBox>
          <h2>Your non-dilutive fundraising options</h2>
          <InfoBox>
            <strong>Selected Criteria:</strong>
            <p>State: {state}</p>
            <p>Company Size: {company_size}</p>
            <p>Areas: {areas.join(", ")}</p>
            <p>Requested Grant: {grant} €</p>
            <p>Monthly Revenue: {revenue} €</p>
          </InfoBox>
          {fundingResults.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <TableHeader>Funding option</TableHeader>
                  <TableHeader>State</TableHeader>
                  <TableHeader>Grant volume</TableHeader>
                  <TableHeader>Funding quota</TableHeader>
                  <TableHeader>Approval rate</TableHeader>
                  <TableHeader>Time required</TableHeader>
                  <TableHeader>Benefit-Cost Score</TableHeader>
                  <TableHeader></TableHeader>
                </tr>
              </thead>
              <tbody>
                {fundingResults.map((option, index) => (
                  <tr key={index}>
                    <TableCell>{option["funding option"]}</TableCell>
                    <TableCell>{option["state"]}</TableCell>
                    <TableCellNoWrap>
                      {option["grant_volume"].toLocaleString()} €
                    </TableCellNoWrap>
                    <TableCell>{option["funding_quota"]}%</TableCell>
                    <TableCell>{option["approval_rate"]}%</TableCell>
                    <TableCellNoWrap>
                      {option["time_required"]} months
                    </TableCellNoWrap>
                    <TableCell>
                      {option["benefit_cost_score"] >= 5
                        ? "High"
                        : option["benefit_cost_score"] >= 0
                        ? "Medium"
                        : "Low"}
                    </TableCell>
                    <TableCell>
                      <Button>Add to my list</Button>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <WarningBox>
              No grants were found. Do you want to try again?
              <br />
              <RetryButton onClick={() => navigate("/")}>Try Again</RetryButton>
            </WarningBox>
          )}
        </ContentBox>
      </MainContent>
    </PanelContainer>
  );
};

export default Panel;
