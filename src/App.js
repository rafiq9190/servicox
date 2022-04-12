import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Grid from "./components/grid/Grid";
import Search from "./components/search/Search";
import { data } from "./data";

const math = require("mathjs");

function App() {
  const [mean, setMean] = useState();
  const [valueDate, setValueData] = useState(data);
  const [median, setMedian] = useState();
  const [mode, setMode] = useState();
  const [deviation, setDiviation] = useState();
  const [getUserValue, setGetUserValue] = useState();

  const newArr = [...data];

  const meanCaluculate = useCallback(() => {
    if (data) {
      const sum = valueDate.reduce((acc, current) => acc + current, 0);
      const avg = sum / valueDate.length;
      setMean(avg);
    }
  }, [data]);

  const medianCaluculate = useCallback(() => {
    if (data) {
      const mid = Math.floor(valueDate.length / 2),
        nums = [...valueDate].sort((a, b) => a - b);

      return valueDate.length % 2 !== 0
        ? setMedian(nums[mid])
        : setMedian((nums[mid - 1] + nums[mid]) / 2);
    }
  }, [data]);

  const moodCalculate = useCallback(() => {
    if (data) {
      const mode = {};
      let max = 0,
        count = 0;

      for (let i = 0; i < valueDate.length; i++) {
        const item = valueDate[i];

        if (mode[item]) {
          setMode(mode[item]++);
        } else {
          setMode((mode[item] = 1));
        }

        if (count < mode[item]) {
          max = item;
          count = mode[item];
        }
      }

      return max;
    }
  }, []);

  const standardDeviationCalculate = useCallback(() => {
    let standardDeviation = math.std(valueDate);
    setDiviation(standardDeviation);
  }, [valueDate]);

  useEffect(() => {
    meanCaluculate();
    medianCaluculate();
    moodCalculate();
    standardDeviationCalculate();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Grid mean={mean} median={median} mode={mode} deviation={deviation} />
      <Search valueDate={valueDate} setValueData={setValueData} />
    </div>
  );
}

export default App;
