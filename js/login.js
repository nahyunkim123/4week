
// 입력한 값을 담을 배열
const List = [];



//이메일 유효성 검사
function isValidEmail(email) {
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }


function AvailableEmail(email) {
    return List.some(function (user) {
      return user.email === email;
    });
  }
  
  
  function checkDuplicate() {
    const emailInput = document.getElementById("id");
    const emailError = document.getElementById("emailError");
  

  emailError.textContent = "";

  const email = emailInput.value;

  if (email.trim() === "") {
    emailError.textContent = "이메일은 필수 입력값입니다.";
    emailError.style.color = "coral"

  } else if (AvailableEmail(email)) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    emailError.style.color = "coral"

  } else {
    emailError.textContent = "사용 가능한 이메일입니다.";
    emailError.style.color = "green"


  }
}

  
  

  


//비밀번호 유효성 검사
  function isValidPassword(password) {
    return password.length >= 6 && password.length <= 13;
  }

  

  // 가입
  function join() {
     const emailInput = document.getElementById("id");
     const passwordInput = document.getElementById("pw");
     const passwordConfirmInput = document.getElementById("pwCHK");
     const emailError = document.getElementById("emailError");
     const passwordError = document.getElementById("passwordError");

   
    emailError.textContent = "";
    passwordError.textContent = "";

    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    const valid = true;


    if (!isValidEmail(email)) {
      emailError.textContent = "잘못된 이메일 형식입니다. 이메일을 정확하게 입력해주세요.";
      emailError.style.color = "coral"

      valid = false;
    }

    if (!isValidPassword(password)) {
      passwordError.textContent = "비밀번호는 6자에서 13자 사이여야 합니다.";

      valid = false;
    }

  
    if (password !== passwordConfirm) {
        pwCHKError.textContent = "비밀번호와 비밀번호 확인이 일치하지 않습니다.";


      valid = false;
    }

    if (valid) {
      var user = {
        email: email,
        password: password
      };
      List.push(user);
      console.log(List); 
      alert("가입 완료")
    }

    return false; 
  }
