import { useFundedStore } from "../../store/useFundedStore";
import { useNavigate } from "react-router-dom";
import {
  Container,
  InfoBox,
  WarningBox,
  Table,
  TableHeader,
  TableCell,
  Button,
  RetryButton,
} from "./primitives";

const Results = () => {
  const { fundingResults, state, company_size, areas, grant, revenue } =
    useFundedStore();

  const cleanState = (state: string | string[]) => {
    if (Array.isArray(state)) {
      return state.join(", ");
    }
    return state;
  };

  const navigate = useNavigate();

  return (
    <Container>
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
                <TableCell>{cleanState(option["state"])}</TableCell>
                <TableCell>
                  {option["grant_volume"].toLocaleString()} €
                </TableCell>
                <TableCell>{option["funding_quota"]}%</TableCell>
                <TableCell>{option["approval_rate"]}%</TableCell>
                <TableCell>{option["time_required"]} months</TableCell>
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
    </Container>
  );
};

export default Results;
