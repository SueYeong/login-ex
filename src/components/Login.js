import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const userDb = {
  dbUsername: "test",
  dbPw: "123123123",
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border: 1px solid #dbdbdb;
  align-items: center;
  padding: 80px 50px;
  border-radius: 10px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      all: unset;
      border: 1px solid #dbdbdb;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 10px;
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: orangered;
  box-sizing: border-box;
  color: white;
  border-radius: 10px;
  opacity: ${(porps) => porps.opacity};
  cursor: ${(props) => props.cursor};
  transition: 0.5s;
`;

const ErrorMessage = styled.span`
  font-weight: 900;
  color: crimson;
  margin-bottom: 15px;
`;

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    const { username, password } = getValues();
    const { dbUsername, dbPw } = userDb;

    if (username !== dbUsername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다" });
    }

    if (password !== dbPw) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다" });
    }

    if (username === dbUsername && password === dbPw) {
      navigate("/");
    }
  };

  console.log(errors);

  return (
    <Wrap>
      <LoginWrap>
        <Title>LOGIN</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 작성해주세요",
              },
            })}
            type="text"
            placeholder="이메일이나 아이디를 입력해주세요"
          />

          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}
          {errors?.usernameResult?.message && (
            <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
          )}
          <input
            {...register("password", {
              required: "비밀번호는 필수 입니다",
              minLength: {
                value: 8,
                message: "비밀번호는 8자리 이상 작성해주세요",
              },
              //   pattern: {
              //     value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,16}$/,
              //     message:
              //       "비밀번호는 8자리이상 문자, 숫자 조합으로 작성하셔야 합니다",
              //   },
            })}
            type="password"
            placeholder="패스워드"
          />
          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
          {errors?.passwordResult?.message && (
            <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
          )}
          <Button
            opacity={isValid ? 1 : 0.5}
            cursor={isValid ? "pointer" : "auto"}
          >
            로그인
          </Button>
        </form>
      </LoginWrap>
    </Wrap>
  );
};

{
  /* <form action="??" method="get/post">
</form>
action: input 내용을 담아 특정 페이지로 보낼때 */
}
