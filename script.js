 let a = "";

    function btnclick(value) {
      a += value;
      document.getElementById("display").value = a;
    }

    function calculate() {
      try {
        let answer = eval(a);
        document.getElementById("display").value = answer;
        a = answer.toString();
      } catch (error) {
        document.getElementById("display").value = "Error";
        a = "";
      }
    }

    function clearDisplay() {
      a = "";
      document.getElementById("display").value = "";
    }