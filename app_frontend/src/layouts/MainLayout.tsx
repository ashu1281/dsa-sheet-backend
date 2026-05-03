import {
  Box,
  Container,
} from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
}: Props) => {

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;