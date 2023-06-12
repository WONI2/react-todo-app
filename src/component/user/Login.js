import React from 'react'
import {Grid, Button, Container, Typography, TextField} from "@mui/material";
import { useNavigate } from 'react-router-dom';

import { API_BASE_URL as BASE, USER } from '../../config/host-config';

const Login = () => {

const REQUEST_URL = BASE + USER + '/signin'; 
const redirect = useNavigate();

// 서버에 AJAX 요청
const fetchLogin = async() => {

    //이메일, 비밀번호 입력태그 얻어오기
    const $email = document.getElementById('email');
    const $password = document.getElementById('password');

  const res = await fetch(REQUEST_URL, {
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify({
      email : $email.value,
      password : $password.value
    })
  });
  
  if(res.status === 400 ) {
    const text = await res.text(); //가입이 안되어 있거나 비밀번호가 틀린경우, 
        alert(text);                          // 서버에서 온 메세지가 문자열로 저장되어 있기 때문에 text로 받아 줌
        return; 
      }

  const {token, userName, email, role} = await res.json();
  // console.log(json.userName);
  // alert(json.userName); 

// json에 담긴 인증정보를 클라이언트에 보관
// 1. 로컬 스토리지 - 브라우저가 종료되어도 보관됨 -- 자동로그인 처럼 클라이언트에서 처리 
// 2. 세션 스토리지 - 브라우저가 종료되면 사라짐 -- 일반로그인 

//1. 로컬스토리지
localStorage.setItem('ACCESS_TOKEN', token);
localStorage.setItem('LOGIN_USERNAME', userName);
localStorage.setItem('USER_ROLE', role);




  // 홈으로 리다이렉트
      redirect('/')

};


// 로그인 요청 핸들러
const loginHandler = e => {
  e.preventDefault();



  // 서버에 로그인 요청 전송
  fetchLogin();


};


  return (
    <Container component="main" maxWidth="xs" style={{ margin: "200px auto" }}>
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography component="h1" variant="h5">
                로그인
            </Typography>
        </Grid>
    </Grid>
    <form noValidate onSubmit={loginHandler}>
        
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="email address"
                    name="email"
                    autoComplete="email"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="on your password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    로그인
                </Button>
            </Grid>
        </Grid>
    </form>
</Container>
  )
}

export default Login