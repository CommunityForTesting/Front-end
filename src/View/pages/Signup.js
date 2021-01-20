import { React, useState, useEffect } from "react";
import { Grid, Button, TextField, Checkbox } from "@material-ui/core";
import PageFrame from "View/component/PageFrame";

const Level_1 = (props) => {
  const setLevel = props.setLevel;
  const [checked, setChecked] = useState({
    checked_1: false,
    checked_2: false,
    checked_3: false,
  });

  return (
    <div style={{ width: "100%", alignItems: "flex-start" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          borderBottom: "1px solid #DEDEDE",
          marginTop: "6%",
          paddingBottom: "3%",
        }}
      >
        <div>만 14세 이상입니다.</div>
        <Checkbox
          color="default"
          style={{ marginLeft: "auto" }}
          onChange={() => {
            setChecked({ ...checked, checked_1: !checked.checked_1 });
          }}
        ></Checkbox>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginTop: "3%",
        }}
      >
        <div>하루토론 이용약관 동의</div>
        <Checkbox
          color="default"
          style={{ marginLeft: "auto" }}
          onChange={() => {
            setChecked({ ...checked, checked_2: !checked.checked_2 });
          }}
        ></Checkbox>
      </div>
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#F2F2F2",
          backgroundClip: "content-box",
          marginTop: "3%",
          paddingBottom: "5%",
          borderBottom: "1px solid #DEDEDE",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginTop: "3%",
        }}
      >
        <div>개인정보 수집 이용에 관한 동의</div>
        <Checkbox
          color="default"
          style={{ marginLeft: "auto" }}
          onChange={() => {
            setChecked({ ...checked, checked_3: !checked.checked_3 });
          }}
        ></Checkbox>
      </div>
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#F2F2F2",
          backgroundClip: "content-box",
          marginTop: "3%",
          paddingBottom: "5%",
          borderBottom: "1px solid #DEDEDE",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginTop: "2%",
          marginBottom: "5%",
        }}
      >
        <Button
          style={{
            width: "60px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "white 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "Black",
            border: "1px solid black",
            marginLeft: "auto",
            marginTop: "2%",
          }}
        >
          취소
        </Button>
        <Button
          style={{
            width: "60px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "#598DDE 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "white",
            marginLeft: "3%",
            marginTop: "2%",
          }}
          onClick={() => {
            if (checked.checked_1 && checked.checked_2 && checked.checked_3) {
              setLevel(2);
              window.scrollTo(0, 0);
            }
          }}
        >
          동의
        </Button>
      </div>
    </div>
  );
};

const Level_2 = (props) => {
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState({
    req_1: false,
    req_2: false,
  });
  const setLevel = props.setLevel;
  const checkRequirements = () => {
    pw.length >= 8 && pw.length <= 20
      ? setRequirements({ ...requirements, req_2: true })
      : setRequirements({ ...requirements, req_2: false });
  };
  return (
    <div
      style={{
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <TextField
        label="이메일 주소"
        variant="outlined"
        style={{ width: "100%", marginTop: "8%" }}
      ></TextField>
      <div
        style={{
          marginTop: "2%",
          color: "rgba(19, 19, 19, 0.5)",
          fontSize: "1.2rem",
          fontFamily: "NotoSansKR-Regular",
        }}
      >
        회원가입을 위해 이메일 인증이 진행됩니다.
      </div>
      <TextField
        label="비밀번호"
        variant="outlined"
        type="password"
        name="password"
        onChange={(e) => {
          setPw(e.target.value);
          checkRequirements();
        }}
        style={{ width: "100%", marginTop: "5%" }}
      ></TextField>
      <TextField
        label="비밀번호 확인"
        variant="outlined"
        type="password"
        name="password"
        style={{ width: "100%", marginTop: "3%" }}
      ></TextField>
      <div
        style={{
          marginTop: "2%",
          color: "rgba(19, 19, 19, 0.7)",
          fontSize: "1.2rem",
          fontFamily: "NotoSansKR-Bold",
        }}
      >
        비밀번호 요구사항
      </div>
      <div
        style={{
          marginLeft: "-1%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Checkbox checked disabled></Checkbox>
        <div
          style={{
            color: "rgba(19, 19, 19, 0.5)",
            fontSize: "1.1rem",
          }}
        >
          영문, 숫자, 특수문자 중 2개 이상의 조합입니다.
        </div>
      </div>
      <div
        style={{
          marginLeft: "-1%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Checkbox checked={requirements.req_2} disabled></Checkbox>
        <div
          style={{
            color: "rgba(19, 19, 19, 0.5)",
            fontSize: "1.1rem",
          }}
        >
          8~20자입니다.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginTop: "2%",
          marginBottom: "5%",
        }}
      >
        <Button
          style={{
            width: "60px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "white 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "Black",
            border: "1px solid black",
            marginLeft: "auto",
            marginTop: "2%",
          }}
          onClick={() => {
            setLevel(1);
            window.scrollTo(0, 0);
          }}
        >
          이전
        </Button>
        <Button
          style={{
            width: "60px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "#598DDE 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "white",
            marginLeft: "3%",
            marginTop: "2%",
          }}
          onClick={() => {
            setLevel(3);
            window.scrollTo(0, 0);
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

const Level_3 = (props) => {
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState({
    req_1: false,
    req_2: false,
  });
  const setLevel = props.setLevel;
  const checkRequirements = () => {
    pw.length >= 8 && pw.length <= 20
      ? setRequirements({ ...requirements, req_2: true })
      : setRequirements({ ...requirements, req_2: false });
  };
  return (
    <div
      style={{
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          marginTop: "6%",
          fontSize: "1.2rem",
          fontFamily: "NotoSansKR-Regular",
        }}
      >
        example@gmail.com(으)로 인증 메일이 발송되었습니다.
      </div>
      <div
        style={{
          marginTop: "2%",
          fontSize: "1.2rem",
          fontFamily: "NotoSansKR-Regular",
        }}
      >
        메일을 1시간 이내에 확인한 후 6자리 인증 코드를 입력해야<br></br>
        하루토론 회원가입을 완료하실 수 있습니다.
      </div>
      <TextField
        label="인증코드"
        variant="outlined"
        style={{ width: "100%", marginTop: "5%" }}
      ></TextField>
      <div style={{ width: "100%", display: "flex" }}>
        <Button
          style={{
            width: "80px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "#598DDE 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "White",
            marginLeft: "auto",
            marginTop: "3%",
          }}
          onClick={() => {}}
        >
          인증하기
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          marginTop: "1%",
          marginBottom: "5%",
        }}
      >
        <Button
          style={{
            width: "60px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "white 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "Black",
            border: "1px solid black",
            marginLeft: "auto",
            marginTop: "2%",
          }}
          onClick={() => {
            setLevel(2);
            window.scrollTo(0, 0);
          }}
        >
          이전
        </Button>
        <Button
          style={{
            width: "60px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "#598DDE 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "white",
            marginLeft: "3%",
            marginTop: "2%",
          }}
          onClick={() => {
            setLevel(4);
            window.scrollTo(0, 0);
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

const Level_4 = (props) => {
  return (
    <div
      style={{
        width: "100%",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          marginTop: "6%",
          fontSize: "1.2rem",
          fontFamily: "NotoSansKR-Regular",
        }}
      >
        회원가입 완료!
      </div>
      <div
        style={{
          marginTop: "2%",
          fontSize: "1.2rem",
          fontFamily: "NotoSansKR-Regular",
        }}
      >
        총 4단계의 혹독한 회원가입의 시련을 이겨내다니,<br></br>
        알파고님이 좋아 할 인재임이 틀림없습니다.
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <Button
          style={{
            width: "140px",
            height: "40px",
            fontFamily: "NotoSansKR-Regular",
            fontSize: "1.1rem",
            background: "#598DDE 0% 0% no-repeat padding-box",
            borderRadius: "24px",
            color: "white",
            marginLeft: "auto",
            marginTop: "2%",
            marginBottom: "5%",
          }}
        >
          메인 화면으로 가기
        </Button>
      </div>
    </div>
  );
};

function Signup() {
  const [inputCheck, setInputCheck] = useState(false);
  const [email, setEmail] = useState();
  const [domain, setDomain] = useState("naver.com");
  const [pw, setPw] = useState();
  const [level, setLevel] = useState(1);

  const selectLevelComponent = () => {
    if (level === 1) {
      return <Level_1 setLevel={setLevel}></Level_1>;
    } else if (level === 2) {
      return <Level_2 setLevel={setLevel}></Level_2>;
    } else if (level === 3) {
      return <Level_3 setLevel={setLevel}></Level_3>;
    } else if (level === 4) {
      return <Level_4 setLevel={setLevel}></Level_4>;
    }
  };
  const domains = [
    { value: "naver.com" },
    { value: "gmail.com" },
    { value: "hanmail.com" },
    { value: "직접입력" },
  ];
  return (
    <PageFrame>
      <Grid className="signup-box">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ fontSize: "2rem", fontFamily: "NotoSansKR-Bold" }}>
            회원가입
          </div>
          <div
            className={level === 1 ? "level-selected" : "level-default"}
            style={{ marginLeft: "auto" }}
          >
            1
          </div>
          <div className={level === 2 ? "level-selected" : "level-default"}>
            2
          </div>
          <div className={level === 3 ? "level-selected" : "level-default"}>
            3
          </div>
          <div className={level === 4 ? "level-selected" : "level-default"}>
            4
          </div>
        </div>
        {selectLevelComponent()}
      </Grid>
    </PageFrame>
  );
}

export default Signup;
