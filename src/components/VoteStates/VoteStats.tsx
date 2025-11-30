import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VotesProps {
  votes: Votes;
  totalVotes: number;
  positiveRates: number;
}

export default function VoteStats({
  votes,
  totalVotes,
  positiveRates,
}: VotesProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRates}%</strong>
      </p>
    </div>
  );
}
