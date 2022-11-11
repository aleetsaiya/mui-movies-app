import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchQuery } from "../services/moviesApi";
import {
  Box,
  Typography,
  Rating,
  Stack,
  Link,
  Container,
  IconButton,
} from "@mui/material";
import { Header } from "./Header";
import { styled } from "@mui/material/styles";
import { RotatePoster } from "./UI/RotatePoster";

import HomeIcon from "@mui/icons-material/Home";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const MovieInfo = ({
  voteCount,
  voteAverage,
  releaseDate,
  homepage,
}: {
  voteCount: number;
  voteAverage: number;
  releaseDate: string;
  homepage: string | undefined;
}) => {
  const fontSize = {
    xs: "0.875rem",
    md: "1.25rem",
  };
  return (
    <>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={3}
        height={{
          xs: "auto",
          md: "30",
        }}
        fontSize={fontSize}
      >
        <Box display="flex" alignItems="center" height="100%">
          <ThumbUpIcon
            sx={{
              marginRight: "8px",
              fontSize: {
                fontSize,
              },
              color: "lightblue",
            }}
          />{" "}
          Votes : {voteCount}
        </Box>
        <Box display="flex" alignItems="center" height="100%">
          <InsertInvitationIcon
            sx={{
              marginRight: "8px",
              fontSize: {
                fontSize,
              },
              color: "lightgreen",
            }}
          />
          Date : {releaseDate}
        </Box>
        <Box display="flex" alignItems="center" height="100%">
          Rating:
          <StyledRating
            sx={{ marginLeft: "8px" }}
            value={voteAverage / 2}
            precision={0.5}
            readOnly
            icon={
              <FavoriteIcon
                sx={{
                  fontSize: {
                    fontSize,
                  },
                }}
              />
            }
            emptyIcon={
              <FavoriteBorderIcon
                sx={{
                  fontSize: {
                    fontSize,
                  },
                }}
              />
            }
          />
        </Box>
      </Stack>
      {homepage && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          mt={2}
          height={30}
        >
          <HomeIcon
            sx={{
              fontSize: {
                fontSize,
              },
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          />
          <Link
            href={homepage}
            target="_blank"
            rel="noreferrer"
            fontSize={fontSize}
          >
            {homepage.length > 43
              ? homepage.slice(0, 40).concat("...")
              : homepage}
          </Link>
        </Box>
      )}
    </>
  );
};

export const MovieDetail = () => {
  const params = useParams<{
    id: string;
  }>();
  const id = params.id as string;
  const { data } = useSearchQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {data && (
        <>
          <Header showedMovie={data} />
          <Container sx={{ position: "relative" }}>
            <IconButton
              size="medium"
              onClick={handleGoBack}
              sx={{
                position: "absolute",
                top: "-30px",
                left: "-60px",
                border: "solid 1px #cdcbcb",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems={{
                xs: "center",
                md: "flex-start",
              }}
              width="100%"
              flexDirection={{
                xs: "column",
                md: "row",
              }}
              p={{ xs: 2, md: 0 }}
              mt={5}
            >
              {/* left */}
              <Box pt={2} pr={{ sx: 0, md: 6 }}>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  mb={5}
                  fontSize={{ xs: "2rem", md: "3rem" }}
                >
                  {data?.title}
                </Typography>
                <MovieInfo
                  voteCount={data.vote_count}
                  voteAverage={data.vote_average}
                  releaseDate={data.release_date}
                  homepage={data.homepage}
                />
                <Typography variant="h5" mt={7} mb={2} fontWeight="bold">
                  Overview
                </Typography>
                <Typography
                  paragraph
                  fontSize={{ sx: "0.875rem", md: "1.15rem" }}
                >
                  {data.overview}
                </Typography>
                {data.tagline && (
                  <Typography
                    variant="h3"
                    component="h5"
                    color="#efefef"
                    mt={{
                      xs: 5,
                      md: 10,
                    }}
                    fontSize={{
                      xs: "2rem",
                      md: "3rem",
                    }}
                    mb={{ xs: 5, md: 0 }}
                    sx={{ fontFamily: "'Courgette', cursive" }}
                  >
                    {`"${data.tagline}"`}
                  </Typography>
                )}
              </Box>
              {/* right */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
              >
                <RotatePoster title={data.title} poster={data.poster_path}>
                  <Typography
                    variant="h4"
                    component="h5"
                    fontSize={{ xs: "1rem", md: "2.125rem" }}
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Production Companies
                  </Typography>
                  {data.production_companies?.map((company) => (
                    <Box
                      key={company.id}
                      fontSize={{ xs: "0.875rem", md: "1.15rem" }}
                      textAlign="center"
                      mt={1}
                    >
                      <Link
                        href={`https://en.wikipedia.org/wiki/${company.name.replaceAll(
                          " ",
                          "_"
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {company.name}
                      </Link>
                    </Box>
                  ))}
                  <Typography
                    variant="h4"
                    component="h5"
                    fontWeight="bold"
                    textAlign="center"
                    fontSize={{ xs: "1rem", md: "2.125rem" }}
                    mt={8}
                  >
                    Production Countries
                  </Typography>
                  {data.production_countries?.map((country) => (
                    <Box
                      key={country.iso_3166_1}
                      fontSize={{ xs: "0.875rem", md: "1.15rem" }}
                      textAlign="center"
                      mt={1}
                    >
                      <Link
                        href={`https://en.wikipedia.org/wiki/${country.iso_3166_1}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {country.name}
                      </Link>
                    </Box>
                  ))}
                </RotatePoster>
              </Box>
            </Box>
          </Container>
        </>
      )}
    </>
  );
};
