import React from "react";
import axios from "axios";
import { AuthHeader }  from "../helpers/AuthHeader"
import { API_URL } from "../constants/EndPoints_API";


// AXIOS SETTINGS
const headersKeys = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'authorization': AuthHeader()
}

export const client = async() => {
  return axios.create({
    baseURL: API_URL,
    headers: headersKeys
  });
}



