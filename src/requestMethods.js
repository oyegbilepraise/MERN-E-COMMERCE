import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTg1NTU4ZWEyNmFlNmI0YzU2OTk3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODAxODM3MiwiZXhwIjoxNjM4Mjc3NTcyfQ.3DrWJQvWYLZOU1HARstwrHQDXFCLrg2CcMjQ95W27Eo'

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})