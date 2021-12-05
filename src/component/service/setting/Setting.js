import React, { useState, useMemo } from "react";
// import DatePicker from "react-datepicker";
import Select from "react-select";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";

const SettingDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  padding: 20px;
`;

const SettingTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding-top: 50px;
  padding-bottom: 30px;
  text-underline-position: under;
  border-bottom: 5px solid #3b434d;
  width: 30%;
`;

const SettingForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const TimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-between;
  width: 30%;
`;

const customTheme = createTheme({
  overrides: {
    MuiPickersBasePicker: {
      pickerView: {
        backgroundColor: "black",
      },
    },
    MuiPickersDay: {
      day: {
        color: "light-gray",
        fontFamily: '"Do Hyeon", sans-serif',
        backgroundColor: "white",
        borderRadius: "0px",
      },
      container: {
        backgroundColor: "black",
      },
      daySelected: {
        backgroundColor: "",
        color: "light-gray",
      },
      dayDisabled: {
        color: "black",
      },
      current: {
        color: "",
      },
    },
  },
});

function BusinessTime() {
  const [startTime, setStartTime] = useState(new Date("Sun Dec 05 2021 09:00:00 GMT+0900 (한국 표준시)"));
  const [endTime, setEndTime] = useState(new Date("Sun Dec 05 2021 18:00:00 GMT+0900 (한국 표준시)"));
  const [Time, setTime] = useState({ start: "", end: "" });
  const onTimeClick = () => {
    // console.log(startTime);
    // console.log(endTime);
    console.log(startTime.toTimeString().substr(0, 5));
    console.log(endTime.toTimeString().substr(0, 5));
  };

  return (
    <>
      <h1
        style={{
          color: "#787878",
          margin: "0px 0px 10px 0px",
          fontSize: "26px",
        }}
      >
        Setting
      </h1>
      <SettingDiv>
        <SettingTitle>Setting Business Time</SettingTitle>
        <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimeDiv>
              <div style={{ backgroundColor: "white" }}>
                <MobileTimePicker
                  label="start time"
                  value={startTime}
                  onChange={(newValue) => {
                    setStartTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
              <div style={{ backgroundColor: "white" }}>
                <MobileTimePicker
                  label="end time"
                  value={endTime}
                  onChange={(newValue) => {
                    setEndTime(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
              <div>
                <button onClick={onTimeClick} style={{ height: "52px", backgroundColor: "#3B434D", color: "white", borderRadius: "5px", width: "50px" }}>
                  저장
                </button>
              </div>
            </TimeDiv>
          </LocalizationProvider>
        </div>
        <div>
          <div style={{ fontSize: "18px", color: "white", paddingTop: "15px", paddingBottom: "15px", textAlign: "center", width: "30%", backgroundColor: "#3B434D", borderRadius: "10px" }}>
            <span style={{ fontWeight: "bolder", paddingRight: "15px" }}>현재 업무 시간 | </span>
            {startTime.toTimeString().substr(0, 5)} ~ {endTime.toTimeString().substr(0, 5)}
          </div>
        </div>
      </SettingDiv>
    </>
  );
}
function NotificationSetting() {
  const options = useMemo(
    () => [
      { value: "policy1", label: "policy1" },
      { value: "policy2", label: "policy2" },
      { value: "policy3", label: "policy3" },
      { value: "policy4", label: "policy4" },
    ],
    []
  );
  const options2 = ["policy1", "policy2", "policy3", "policy4"];
  const [endDate, setEndDate] = useState(new Date());
  const [resource, setResource] = useState("");
  const [text, setText] = useState("");
  const [notification, setNotificaton] = useState([]);
  const onChange = (event) => {
    setResource(event.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setNotificaton((prev) => [
      ...prev,
      {
        resource: { resource },
        date: { endDate },
        text: { text },
      },
    ]);
    console.log(notification);
  };
  const customStyles = {
    control: (base) => ({
      ...base,
      width: 254,
      height: 20,
      minHeight: 35,
      marginTop: 11,
      fontSize: 16,
      textAlign: "center",
    }),
  };
  return (
    <SettingDiv>
      <SettingTitle>Setting Expiration Date</SettingTitle>
      <div style={{ paddingTop: "15px" }}>
        <div style={{ paddingTop: "10px", paddingBottom: "10px", justifyContent: "space-between", width: "40%" }}>
          <SettingForm onSubmit={onSubmit}>
            <div>
              <Select options={options} isSearchable onChange={onChange} styles={customStyles} />
            </div>
            <div style={{ backgroundColor: "white", margin: "12px", height: "fit-content", width: "254px" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DateTimePicker
                    renderInput={(params) => <TextField {...params} />}
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
          </SettingForm>
          <div style={{ paddingTop: "20px", display: "flex", flexDirection: "row", width: "76%" }}>
            {/* <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            > */}
            <TextField
              id="standard-basic"
              label="Message"
              variant="standard"
              fullWidth="true"
              onChange={(newtext) => {
                setText(newtext);
              }}
            />
            {/* </Box> */}
            <div style={{ paddingLeft: "20px" }}>
              <input type="submit" style={{ height: "52px", width: "50px", backgroundColor: "#3B434D", color: "white", borderRadius: "5px" }} />
            </div>
          </div>
        </div>
      </div>
    </SettingDiv>
  );
}
function Setting() {
  return (
    <>
      <div>
        <BusinessTime />
      </div>
      <div>
        <NotificationSetting />
      </div>
    </>
  );
}

export default Setting;
