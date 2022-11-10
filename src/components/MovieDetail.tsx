import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchQuery } from "../services/moviesApi";
import { Box, Typography, Rating, Stack, Link, Container } from "@mui/material";
import { Header } from "./Header";
import { styled } from "@mui/material/styles";
import { RotatePoster } from "./UI/RotatePoster";

import HomeIcon from "@mui/icons-material/Home";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

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
  return (
    <>
      <Stack direction="row" spacing={3} height={30} fontSize="20px">
        <Box display="flex" alignItems="center" height="100%">
          <ThumbUpIcon
            sx={{
              marginRight: "8px",
              fontSize: 20,
              color: "lightblue",
            }}
          />{" "}
          Votes : {voteCount}
        </Box>
        <Box display="flex" alignItems="center" height="100%">
          <InsertInvitationIcon
            sx={{
              marginRight: "8px",
              fontSize: 20,
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
            icon={<FavoriteIcon sx={{ fontSize: 20 }} />}
            emptyIcon={<FavoriteBorderIcon sx={{ fontSize: 20 }} />}
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
              fontSize: 20,
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          />
          <Link href={homepage} target="_blank" rel="noreferrer">
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
  const { data, isLoading, error } = useSearchQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log("data", data);

  return (
    <>
      {data && (
        <>
          <Header showedMovie={data} />
          {/* wrapper */}
          <Container>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="flex-start"
              width="100%"
              mt={5}
            >
              {/* left */}
              <Box pt={2} pr={6}>
                <Typography variant="h3" fontWeight="bold" mb={5}>
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
                <Typography paragraph fontSize="1.15rem">
                  {data.overview}
                </Typography>
                {data.tagline && (
                  <Typography
                    variant="h3"
                    component="h5"
                    color="#efefef"
                    mt={10}
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
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Production Companies
                  </Typography>
                  {data.production_companies?.map((company) => (
                    <Box
                      key={company.id}
                      fontSize="1.15rem"
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
                    mt={8}
                  >
                    Production Countries
                  </Typography>
                  {data.production_countries?.map((country) => (
                    <Box
                      key={country.iso_3166_1}
                      fontSize="1.15rem"
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
