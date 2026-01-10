const 정답 = "APPLE";

let attemps = 0;
let index = 0;

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:44vw; width:200px; height:100px; background-color:white;";
    document.body.appendChild(div);
  };

  const handleKeydown = (event) => {
    const nextLine = () => {
      if (attemps === 6) return gameover();
      attemps += 1;
      index = 0;
    };

    const gameover = () => {
      window.removeEventListener("keydown", handleKeydown);
      displayGameover();
    };

    const handleEnterKey = () => {
      let 맞은_갯수 = 0;

      for (let i = 0; i < 5; i++) {
        const block = document.querySelector(
          `.board-block[data-index ='${attemps}${i}']`
        );
        const 입력한_글자 = block.innerText;
        const 정답_글자 = 정답[i];
        if (정답_글자 === 입력한_글자) {
          맞은_갯수 += 1;
          block.style.background = "#6AAA64";
        } else if (정답.includes(입력한_글자))
          block.style.background = "#C9B458";
        else block.style.background = "#787C7E";

        block.style.color = "white";
      }
      if (맞은_갯수 === 5) gameover();
      nextLine();
    };

    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index ='${attemps}${index}']`
    );

    const handleBackspace = () => {
      if (index > 0) {
        const preBlock = document.querySelector(
          `.board-block[data-index ='${attemps}${index - 1}']`
        );
        preBlock.innerText = "";
      }

      if (index !== 0) index -= 1;
    };
    if (event.key === "Backspace") handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };

  window.addEventListener("keydown", handleKeydown);
  thisBlock.addEventListener("click", handleclick);
}

appStart();
