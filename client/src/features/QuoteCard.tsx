import { Card, Typography } from "@mui/material";
import React from "react";

type QuoteCardProps = {
  quoteText: string;
  quoteAuthor: string;
  quoteSource: string;
  quoteYear: string;
  savedBy: string;
};

const quoteCard = ({
  quoteText,
  quoteAuthor,
  quoteSource,
  quoteYear,
  savedBy,
}: QuoteCardProps) => {
  return (
    <Card>
      <Typography>{savedBy} </Typography>
      <Typography> {quoteText} </Typography>
      <Typography> {quoteAuthor}</Typography>
      <Typography>{quoteSource} </Typography>
      <Typography>{quoteYear} </Typography>
    </Card>
  );
};

export default quoteCard;
