$(document).ready(function () {
  alertify.set('notifier', 'delay', 10)

  alertify.set('notifier', 'position', 'top-right')
  var mouseX = 0
  var mouseY = 0
  var popupCounter = 0

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX
    mouseY = e.clientY
  })
  $(document).mouseleave(function () {
    if (mouseY < 100) {
      if (popupCounter < 1) {
        $('.popup-open-layout4').trigger('click')
      }
      popupCounter++
    }
  })

  $('#bannerFormBtn').on('click', function (e) {
    e.preventDefault()

    var name = $('#bannerName').val()
    var signup_email = $('#bannerEmail').val()
    var signup_phone = $('#bannerPhone').val()
    var header = $('#bannerHeader').val()

    if (!validateEmail(signup_email)) {
      alertify.error('Please Insert Correct Email')
      return false
    }
    if (name === '' || name === null) {
      alertify.error('Please Insert Name')
      return false
    }
    if (signup_phone === '' || signup_phone === null) {
      alertify.error('Please Insert Phone')
      return false
    }
    if (signup_email === '' || signup_email === null) {
      alertify.error('Please Insert Email')
      return false
    }

    if (signup_phone.length < 10 || signup_phone.length > 15) {
      alertify.error('Phone Length Must Be Greater Than 10 and less than 15')
      return false
    }

    formdata = new FormData()
    formdata.append('name', name)
    formdata.append('email', signup_email)
    formdata.append('country_phone', signup_phone)
    formdata.append('header', header)
    formdata.append('mode', 'bannerForm')

    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var result = JSON.parse(xmlHttp.responseText)

        if (result.status == 1) {
          alertify.success('Message Sent Successfully!')
          setTimeout(function () {
            location.href = '/order/thankyou.php'
          }, 2000)
        }
      }
    }

    xmlHttp.open('POST', 'data/data.php', true) // true for asynchronous
    xmlHttp.send(formdata ? formdata : form.serialize())
    for (let [key, value] of formdata) {
      // console.log(`${key}: ${value}`);
    }
    return false
  })

  $('#calnederFormBtn').on('click', function (e) {
    e.preventDefault()
    //  alertify.error("wwwww");
    //  e.preventDefault();

    var name = $('#calenderName').val()
    var signup_email = $('#calenderEmail').val()
    var signup_phone = $('#calenderPhone').val()
    var signup_message = $('#calenderMessage').val()
    var header = $('#calenderHeader').val()
    // alertify.error(header);

    if (!validateEmail(signup_email)) {
      alertify.error('Please Insert Correct Email')
      return false
    }
    if (name === '' || name === null) {
      alertify.error('Please Insert Name')
      return false
    }
    if (signup_phone === '' || signup_phone === null) {
      alertify.error('Please Insert Phone')
      return false
    }
    if (signup_email === '' || signup_email === null) {
      alertify.error('Please Insert Email')
      return false
    }
    if (signup_message === '' || signup_message === null) {
      alertify.error('Please Specify Project Details')
      return false
    }

    formdata = new FormData()
    formdata.append('name', name)
    formdata.append('email', signup_email)
    formdata.append('country_phone', signup_phone)
    formdata.append('signup_message', signup_message)
    formdata.append('header', header)
    formdata.append('mode', 'calenderForm')

    var xmlHttp = new XMLHttpRequest()
    //  alertify.error('<a href="javascript:showConfirm();">chala kya1</a>');
    // alertify.error( formdata);
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        // console.log(xmlHttp.responseText)
        // return false;
        var result = JSON.parse(xmlHttp.responseText)

        //alertify.error(result);

        if (result.status == 1) {
          alertify.success('Message Sent Successfully!')
          setTimeout(function () {
            location.href = '/order/thankyou.php'
          }, 2000)
        }
        // $('.btn-shopy').html("Process Shipment");
        // $('.btn-shopy').prop('disabled', false);
      }
    }

    xmlHttp.open('POST', 'data/data.php', true) // true for asynchronous
    xmlHttp.send(formdata ? formdata : form.serialize())
    for (let [key, value] of formdata) {
      // console.log(`${key}: ${value}`);
    }
    return false
    // validation code here
    // if(!valid) {
    //   alert("123");

    // }
    // }
  })

  $('#couponFormBtn').on('click', function (e) {
    e.preventDefault()
    //  alertify.error("wwwww");
    //  e.preventDefault();

    var name = $('#couponName').val()
    var signup_email = $('#couponEmail').val()
    var signup_phone = $('#couponPhone').val()
    var signup_message = $('#couponCode').val()
    var header = $('#couponHeader').val()
    // alertify.error(header);

    if (!validateEmail(signup_email)) {
      alertify.error('Please Insert Correct Email')
      return false
    }
    if (name === '' || name === null) {
      alertify.error('Please Insert Name')
      return false
    }
    if (signup_phone === '' || signup_phone === null) {
      alertify.error('Please Insert Phone')
      return false
    }
    if (signup_email === '' || signup_email === null) {
      alertify.error('Please Insert Email')
      return false
    }
    if (signup_message === '' || signup_message === null) {
      alertify.error('Please Specify Project Details')
      return false
    }
    if (signup_phone.length < 10 || signup_phone.length > 15) {
      alertify.error('Phone Length Must Be Greater Than 10 and less than 15')
      return false
    }

    formdata = new FormData()
    formdata.append('name', name)
    formdata.append('email', signup_email)
    formdata.append('country_phone', signup_phone)
    formdata.append('signup_message', signup_message)
    formdata.append('header', header)
    formdata.append('mode', 'couponForm')

    var xmlHttp = new XMLHttpRequest()
    // console.log(xmlHttp)
    //  alertify.error('<a href="javascript:showConfirm();">chala kya1</a>');
    // alertify.error( formdata);
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        // return false;
        var result = JSON.parse(xmlHttp.responseText)

        if (result.status == 1) {
          //  $("body").attr("class","");
          //  $("#floating").attr("class","floating_form");

          alertify.success('Message Sent Successfully!')
          setTimeout(function () {
            location.href = '/order/thankyou.php'
          }, 2000)
        }
        // $('.btn-shopy').html("Process Shipment");
        // $('.btn-shopy').prop('disabled', false);
      }
    }

    xmlHttp.open('POST', 'data/data.php', true) // true for asynchronous
    xmlHttp.send(formdata ? formdata : form.serialize())
    for (let [key, value] of formdata) {
      // console.log(`${key}: ${value}`);
    }
    return false
    // validation code here
    // if(!valid) {
    //   alert("123");

    // }
    // }
  })

  $('#contactFormBtn').on('click', function (e) {
    e.preventDefault()
    //  alertify.error("wwwww");
    //  e.preventDefault();

    var name = $('#contactName').val()
    var signup_email = $('#contactEmail').val()
    var signup_phone = $('#contactPhone').val()
    var signup_message = $('#contactMessage').val()
    var header = $('#contactHeader').val()
    // alertify.error(header);

    if (!validateEmail(signup_email)) {
      alertify.error('Please Insert Correct Email')
      return false
    }
    if (name === '' || name === null) {
      alertify.error('Please Insert Name')
      return false
    }
    if (signup_phone === '' || signup_phone === null) {
      alertify.error('Please Insert Phone')
      return false
    }
    if (signup_email === '' || signup_email === null) {
      alertify.error('Please Insert Email')
      return false
    }
    if (signup_message === '' || signup_message === null) {
      alertify.error('Please Specify Project Details')
      return false
    }
    if (signup_phone.length < 10 || signup_phone.length > 15) {
      alertify.error('Phone Length Must Be Greater Than 10 and less than 15')
      return false
    }

    formdata = new FormData()
    formdata.append('name', name)
    formdata.append('email', signup_email)
    formdata.append('country_phone', signup_phone)
    formdata.append('signup_message', signup_message)
    formdata.append('header', header)
    formdata.append('mode', 'contactForm')

    var xmlHttp = new XMLHttpRequest()
    //  alertify.error('<a href="javascript:showConfirm();">chala kya1</a>');
    // alertify.error( formdata);
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        // console.log(xmlHttp.responseText)
        // return false;
        var result = JSON.parse(xmlHttp.responseText)

        //alertify.error(result);

        if (result.status == 1) {
          alertify.success('Message Sent Successfully!')
          setTimeout(function () {
            location.href = '/order/thankyou.php'
          }, 2000)
        }
        // $('.btn-shopy').html("Process Shipment");
        // $('.btn-shopy').prop('disabled', false);
      }
    }

    xmlHttp.open('POST', 'data/data.php', true) // true for asynchronous
    xmlHttp.send(formdata ? formdata : form.serialize())
    for (let [key, value] of formdata) {
      // console.log(`${key}: ${value}`);
    }
    return false
    // validation code here
    // if(!valid) {
    //   alert("123");

    // }
    // }
  })
})

function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (emailAdress.match(regexEmail)) {
    return true
  } else {
    return false
  }
}

function isNumber(evt) {
  evt = evt ? evt : window.event
  var charCode = evt.which ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false
  }
  return true
}
function alphabetvalidation(evt) {
  evt = evt ? evt : window.event
  var charCode = evt.which ? evt.which : evt.keyCode
  if (
    charCode > 31 &&
    (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122)
  ) {
    return false
  }
  return true
}
