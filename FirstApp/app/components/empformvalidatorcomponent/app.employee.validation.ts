export class CustomValidator {
  static stringValidator(ctrl: any) {
    // Validate string with only characters
    var regExp = /^[a-zA-z-]$/;
    if (ctrl.value.match(regExp)) {
      return null;
    } else {
      return { isNotString: true };
    }
  }
  static numberValidator(ctrl: any) {
    // Validate string with only characters
    var regExp = /^[0-9-]$/;
    if (ctrl.value.match(regExp)) {
      return null;
    } else {
      return { isNotString: true };
    }
  }
  static salaryValidator(ctrl: any) {
    // Validate string with only characters
    var regExp = /^[0-9-]$/;
    if (ctrl.value.match(regExp)) {
      return null;
    } else {
      return { isNotNumberic: true };
    }
  }
  static departValidator(ctrl: any) {
    // Validate string with only characters
    var regExp = /^[0-9-]$/;
    if (ctrl.value.match(regExp)) {
      return null;
    } else {
      return { isNotString: true };
    }
  }
  static desigsValidator(ctrl: any) {
    // Validate string with only characters
    var regExp = /^[0-9-]$/;
    if (ctrl.value.match(regExp)) {
      return null;
    } else {
      return { isNotString: true };
    }
  }
  static emailValidator(ctrl: any) {
    //Validate email address with only lowercase characters
    var regExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (ctrl.value.match(regExp)) {
      return null;
    } else {
      return { incorrectEmail: true };
    }
  }
}
