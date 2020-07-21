function validate()
    {
        if(em.value.trim() == "" && ps.value.trim() == ""){
            alert("No Details are filled");
            return false;
        }

      if(em.value.trim() == ""){
          document.getElementById("em").style.border= "solid 1px red";
          document.getElementById("invalid1").style.visibility= "visible";
        return false;
      }
      else if(ps.value.trim() == ""){
        document.getElementById("em").style.border= "solid 1px red";
          document.getElementById("invalid2").style.visibility= "visible";
          return false;
      }
    }