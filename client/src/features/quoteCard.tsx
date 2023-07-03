import { Card, Typography } from "@mui/material";
import React from "react";

type QuoteCardProps = {
  quoteText: string;
  quoteAuthor: string;
  quoteSource: string;
  quoteYear: string;
  savedBy: string;
};

const quoteCard = (props: QuoteCardProps) => {
  return (
    <Card>
      <Typography>{props.savedBy} </Typography>
      <Typography> {props.quoteText} </Typography>
      <Typography> {props.quoteAuthor}</Typography>
      <Typography>{props.quoteSource} </Typography>
      <Typography>{props.quoteYear} </Typography>
    </Card>
  );
};

export default quoteCard;
