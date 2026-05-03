import {
    Box,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

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

    return (
        <Box
            sx={{
                position: "relative",

                overflow: "hidden",

                borderRadius: 5,

                p: 5,

                mb: 4,

                border:
                    "1px solid rgba(255,255,255,0.08)",

                background:
                    "linear-gradient(135deg, #050816 0%, #0b1023 100%)",

                "&::before": {
                    content: '""',

                    position: "absolute",

                    inset: 0,

                    backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.06) 1px,
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
                    sx={{ fontVariant: 'h3', fontWeight: 800 }}
                    gutterBottom
                >
                    <Box
                        component="span"
                        color="#ff6b4a"
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