function validateForm() {
  var f_name = document.getElementById("first_name");
  var l_name = document.getElementById("last_name");
  var phone = document.getElementById("number");
  var email = document.getElementById("email");
  var contact_name = document.getElementById("contact_name");
  var contact_phone = document.getElementById("contact_number");
  var contact_relationship = document.getElementById("contact_relationship");
  var age_range = document.getElementsByClassName("age-range")[0];

  //var year = document.getElementById("year");
  var error_msg = "Please Check and Correct the following input fields!:<br>"
  var num_error = 0;

  // regex declarations
  //var name_reg = /^[A-Z]'?[- a-zA-Z][a-zA-Z]*$/;
  var name_reg = /^[a-zA-z]+$/;
  var nondigit_reg = /^[\D]+$/;
  var phone_reg = /\+?1?\s*\(?-*\.*(\d{3})\)?\.*-*\s*(\d{3})\.*-*\s*(\d{4})$/;
  var year_reg = /(?:\d{2}){1,2}/;
  var email_reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;


  /* Start of Form Checking */
  if (!name_reg.exec(f_name.value)) {
    num_error += 1;
    error_msg += "&emsp;First Name<br>"
  }

  if (!name_reg.exec(l_name.value)) {
    num_error += 1;
    error_msg += "&emsp;Last Name<br>"
  }

  var numOfDigits = (phone.value.replace(/\D/g,"").length);
  if (numOfDigits != 10) {
    num_error += 1;
    error_msg += "&emsp;Phone number<br>"
  }

  if (!email_reg.exec(email.value)) {
    num_error += 1;
    error_msg += "&emsp;Email<br>"
  }

  if (age_range.value == 0) {
    num_error += 1;
    error_msg += "&emsp;Age Range<br>";
  }

  if (!name_reg.exec(contact_name.value)) {
    num_error += 1;
    error_msg += "&emsp;Contact Name<br>"
  }

  var c_numOfDigits = (contact_phone.value.replace(/\D/g,"").length);
  if (c_numOfDigits != 10) {
    num_error += 1;
    error_msg += "&emsp;Contact Phone number<br>"
  }

  if (!nondigit_reg.exec(contact_relationship.value)) {
    num_error += 1;
    error_msg += "&emsp;Contact Relationship<br>"
  }

  var youth_count = 1;
  var youth_list = document.getElementsByClassName("validateYouth");
  for (i = 0; i < youth_list.length; i++) {
    if (youth_list[i].id == "youth_first_name") {
      if (!name_reg.exec(youth_list[i].value)) {
        num_error += 1;
        error_msg += "&emsp;Youth " + youth_count + " First Name<br>";
      }
    }
    else if (youth_list[i].id == "youth_last_name") {
      if (!name_reg.exec(youth_list[i].value)) {
        num_error += 1;
        error_msg += "&emsp;Youth " + youth_count + " Last Name<br>";
      }
    }
    // Age range
    else {
      if (youth_list[i].value == 0) {
        num_error += 1;
        error_msg += "&emsp;Youth " + youth_count + " Age Range<br>";
      }
      youth_count += 1;
    }
  }

  /* End of Form Checking */

  // Print the error message in toast
  if (num_error > 0) {
    Materialize.toast(error_msg, 4000)
  }
}
