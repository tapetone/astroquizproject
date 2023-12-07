//hides intro shows q1//

function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
  }
  
// hides q1 shows q2//

  function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
  }
  
//hides q2 shows q3//

  function question3() {
      document.getElementById("question2").style.display = "none";
      document.getElementById("question3").style.display = "inline-block";
  }
  
  //hides q3 shows q4//
  function question4() {
      document.getElementById("question3").style.display = "none";
      document.getElementById("question4").style.display = "inline-block";
  }
  
  //hides q4 shows q5//
  function question5() {
      document.getElementById("question4").style.display = "none";
      document.getElementById("question5").style.display = "inline-block";
  }
  
  //hides q5 shows results//
  function results() {
  calculateResults()
  document.getElementById("question5").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
  }
  
  // calculates and displays the results//
  
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
  
    let total = Number(q1Value) + Number(q2Value);
    result = total / 2;
    
    if (result > 2) {
      msg = "You answered mostly c you may have a kinesthetic learning style";
    } else if (result >= 1.5) {
      msg = "You answered mostly b, you may have an auditory learning style";
    } else {
      msg = "You answered mostly a, you may have a visual learning style";
    }
  
    document.getElementById("result").innerHTML = msg
  
  } 
  
  /**
   * calculates and displays the results
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
  
    let total = Number(q1Value) + Number(q2Value);
    result = total / 2;
    
    if (result > 2) {
      msg = "You answered mostly c you may have a kinesthetic learning style";
    } else if (result >= 1.5) {
      msg = "You answered mostly b, you may have an auditory learning style";
    } else {
      msg = "You answered mostly a, you may have a visual learning style";
    }
  
    document.getElementById("result").innerHTML = msg
  
  }*/