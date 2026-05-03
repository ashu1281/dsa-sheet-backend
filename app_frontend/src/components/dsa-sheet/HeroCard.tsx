import {
    Box,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import {
    useTheme,
} from "@mui/material/styles";

interface Props {
    userName: string;

    easy: string;

    medium: string;

    hard: string;
}

const HeroCard = ({
    userName,
    easy,
    medium,
    hard,
}: Props) => {

    const theme = useTheme();

    const isDark =
        theme.palette.mode === "dark";

    return (
        <Box
            sx={{
                position: "relative",

                overflow: "hidden",

                borderRadius: 5,

                p: 5,

                mb: 4,

                border: `1px solid ${theme.palette.divider}`,

                background: isDark
                    ? "linear-gradient(135deg, #050816 0%, #0b1023 100%)"
                    : "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",

                transition:
                    "all 0.3s ease",

                "&::before": {
                    content: '""',

                    position: "absolute",

                    inset: 0,

                    backgroundImage: `
            linear-gradient(
              ${isDark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.04)"
                        } 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              ${isDark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.04)"
                        } 1px,
              transparent 1px
            )
          `,

                    backgroundSize:
                        "115px 115px",

                    pointerEvents:
                        "none",
                },
            }}
        >
            <Box
                sx={{
                    position: "relative",

                    zIndex: 1,
                }}
            >

                <Typography
                    gutterBottom
                    sx={{
                        fontSize: {
                            xs: "2rem",
                            md: "3rem",
                        },
                        fontVariant: 'h3', fontWeight: 800
                    }}
                >
                    <Box
                        component="span"
                        color="primary.main"
                    >
                        DSA Sheet
                    </Box>{" "}
                    - Most Important
                    Interview Questions
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        mt: 3,

                        opacity: 0.9,
                    }}
                >
                    Hi, {userName}
                </Typography>

                <Typography
                    sx={{
                        mt: 1,

                        opacity: 0.8,
                    }}
                >
                    Track your DSA preparation
                    progress and solve questions
                    daily.
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        mt: 4,

                        flexWrap: "wrap",
                    }}
                >

                    <Chip
                        color="success"
                        label={`Easy ${easy}`}
                    />

                    <Chip
                        color="warning"
                        label={`Medium ${medium}`}
                    />

                    <Chip
                        color="error"
                        label={`Hard ${hard}`}
                    />

                </Stack>

            </Box>
        </Box>
    );
};

export default HeroCard;