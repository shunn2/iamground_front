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
`;

const SettingTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const SettingForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const TimeDiv = styled.div`
  display: flex;
  flex-direction: row;
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
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [Time, setTime] = useState({ start: "", end: "" });
  const onTimeClick = () => {
    // console.log(startTime);
    // console.log(endTime);
    console.log(startTime.toTimeString().substr(0, 5));
    console.log(endTime.toTimeString().substr(0, 5));
  };

  return (
    <SettingDiv>
      <SettingTitle>Setting BusinessTime</SettingTitle>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimeDiv>
            <div>
              <MobileTimePicker
                label="start time"
                value={startTime}
                onChange={(newValue) => {
                  setStartTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div>
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
              <button onClick={onTimeClick}>click</button>
            </div>
          </TimeDiv>
        </LocalizationProvider>
      </div>
      <div>
        <div style={{ fontSize: "30px" }}>
          현재 업무 시간 {startTime.toTimeString().substr(0, 5)} ~ {endTime.toTimeString().substr(0, 5)}
        </div>
      </div>
    </SettingDiv>
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
      width: 300,
      height: 57,
      minHeight: 35,
      fontSize: 20,
      textAlign: "center",
    }),
  };
  return (
    <SettingDiv>
      <SettingTitle>Setting Notification</SettingTitle>
      <div>
        <SettingForm onSubmit={onSubmit}>
          <div>
            <Select options={options} isSearchable onChange={onChange} styles={customStyles} />
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3} style={{ height: "100px", height: "150px" }}>
                <DateTimePicker
                  renderInput={(params) => <TextField {...params} helperText="만료일 설정" />}
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Message"
                variant="standard"
                onChange={(newtext) => {
                  setText(newtext);
                }}
              />
            </Box>
          </div>
          <div>
            <input type="submit" />
          </div>
        </SettingForm>
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
