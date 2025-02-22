export const handleEnterKey = (
  event: React.KeyboardEvent<HTMLInputElement>,
  action: () => void
) => {
  if (event.key === "Enter") {
    event.preventDefault();
    action();
  }
};
