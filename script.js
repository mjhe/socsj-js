(function() {
  
    
  // hide the menu based on the language...
  var hide_menu = function(language) {

  }
    
  var _key = "language-detected"
  var _language_detected = localStorage.getItem(_key)
  
  var _current_language = window.location.pathname.substring(0,4).toLowerCase()
  
  if (_language_detected == null || _language_detected == "") {
    var _language = window.navigator.languages ? window.navigator.languages[0] : (window.navigator.userLanguage || window.navigator.language)
    if (_language == null) {
      _language = "en-US"
    }
    _language_detected = _language.toLowerCase()
    
    localStorage.setItem(_key, _language_detected)
  }
  
  if (window.location.pathname == "/" && _language_detected != null && _language_detected != "") {
 
    var _location = "welcome"
    
    switch (_language_detected.substring(0, 2)) {
      case("es"):
        _location = "inicio"
        break
      case("it"):
        _location = "inizio"
        break
      default:
        break
    }
    console.log("navigate to:" + _location)
  }
  
  if (_current_language != "/") {
    hide_menu(_current_language)
  }

  
})()
