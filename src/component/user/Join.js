import React, { useEffect, useState } from 'react'
import {Button, Container, Grid,
    TextField, Typography, Link} from "@mui/material";

const Join = () => {

    //상태변수로 회원가입 입력값 관리 , 실시간으로 userValue에 저장하는 방법을 사용
    const [userValue, setUserValue] = useState({
        userName: '' ,
        password: '' ,
        email: '' 
    });

    // 이름 입력창 체인지 이벤트 핸들러
    const nameHandler = e => {
        // 입력한 값을 상태변수에 저장
        // console.log(e.target.value);
        
        const inputVal = e.target.value;
        setUserValue({
            ...userValue,
            userName: inputVal
        })
  
    };

      // 이메일 입력창 체인지 이벤트 핸들러
      const emailHandler = e => {
        // 입력한 값을 상태변수에 저장
        // console.log(e.target.value);
        
        const inputVal = e.target.value;
        setUserValue({
            ...userValue,
            email: inputVal
        })
  
    };

      // 패스워드 입력창 체인지 이벤트 핸들러
      const passwordHandler = e => {
        // 입력한 값을 상태변수에 저장
        // console.log(e.target.value);
        
        const inputVal = e.target.value;
        setUserValue({
            ...userValue,
            password: inputVal
        })
  
    };





    const joinButtonClickHandler = e => {
        e.preventDefault(); // 바닐라js식으로 확인하기. react에서는 나중을 위해서 상태값으로 확인하는 방법을 사용할 것 

        //  const $nameInput = document.getElementById('username');
        // console.log($nameInput.value);
        console.log(userValue);
       
    }

    // 화면 렌더링 끝난 이후 실행되는 함수 
    useEffect(() => {
       
    }, []);
    return (
        <Container component="main" maxWidth="xs" style={{ margin: "200px auto" }}>
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="username"
                            variant="outlined"
                            required
                            fullWidth
                            id="username"
                            label="유저 이름"
                            autoFocus
                            onChange={nameHandler}
                        />
                        <span></span>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                            onChange={emailHandler}
                        />
                        <span></span>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="패스워드"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={passwordHandler}
                        />
                        <span></span>
                    </Grid>
    
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password-check"
                            label="패스워드 확인"
                            type="password"
                            id="password-check"
                            autoComplete="check-password"
                    
                        />
                        <span id="check-text"></span>
                    </Grid>
    
                    <Grid item xs={12}>
                        <Button type="submit" fullWidth variant="contained" style={{background: '#38d9a9'}}
                            onClick={joinButtonClickHandler}>
                            계정 생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
      );
}

export default Join