import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Link as MuiLink,
  IconButton,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";

export const Navbar = ({
  pages,
  pagesRoute,
}: {
  pages: string[];
  pagesRoute: {
    [page: string]: string;
  };
}) => {
  const navigate = useNavigate();

  const handleClickedLogo = () => {
    navigate("/");
  };

  const handleClickedPage = (page: string) => {
    navigate(pagesRoute[page]);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))",
        boxShadow: "none",
        paddingLeft: {
          es: 1.5,
          md: 3,
        },
        paddingRight: {
          es: 1.5,
          md: 3,
        },
        zIndex: 1100,
      }}
    >
      <Toolbar>
        {/* brand */}
        <Stack
          direction="row"
          onClick={handleClickedLogo}
          sx={{
            cursor: "pointer",
            flexGrow: { xs: 1, md: 0 },
          }}
          spacing={1}
          mr={3}
        >
          <AdbIcon
            sx={{
              color: "white",
            }}
          />
          <Typography
            variant="h6"
            component="h1"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: 700,
              letterSpacing: ".25rem",
            }}
          >
            Logo
          </Typography>
        </Stack>
        {/* Menu */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
          }}
        >
          {pages.map((page) => (
            <MuiLink
              key={page}
              onClick={() => handleClickedPage(page)}
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                color: "white",
                fontWeight: 700,
                transition: "all ease .2s",
                "&:hover": {
                  color: "grey.400",
                },
              }}
            >
              {page}
            </MuiLink>
          ))}
        </Stack>
        {/* Right most */}
        <IconButton aria-label="search" sx={{ marginRight: 1 }}>
          <SearchIcon />
        </IconButton>
        <Avatar
          src="https:/randomuser.me/api/portraits/men/79.jpg"
          alt="Jane Doe"
          sx={{
            width: 32,
            height: 32,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
