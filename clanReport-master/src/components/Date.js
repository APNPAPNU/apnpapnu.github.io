import React, { useEffect, useMemo, useState } from "react";
import { format, formatDistanceStrict } from "date-fns";

export default function PrettyDate(props) {
  const { date, formatFormat } = props;

  const [, setTick] = useState(0);
  const [toggle, setToggle] = useState(true);

  const d = useMemo(() => new Date(date), [date]);

  useEffect(() => {
    const id = setInterval(() => setTick(Math.random()), 500);
    return () => clearInterval(id);
  }, []);

  return (
    <span onClick={() => setToggle(!toggle)}>
      {toggle
        ? `${formatDistanceStrict(d, new Date())} ago`
        : format(d, formatFormat || "d LLL Y, h:mm aaaa")}
    </span>
  );
}
