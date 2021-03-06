import React from 'react';
import Screen from '../../core/screen';
import ResetPasswordPane from './reset_password_pane';
import { authWithUsername, hasScreen } from './index';
import { cancelResetPassword, resetPassword } from './actions';
import { renderPasswordResetConfirmation } from './password_reset_confirmation';

const Component = ({i18n, model}) => {
  const headerText = i18n.html("forgotPasswordInstructions") || null;
  const header = headerText && <p>{headerText}</p>;

  return (
    <ResetPasswordPane
      emailInputPlaceholder={i18n.str("emailInputPlaceholder")}
      header={header}
      i18n={i18n}
      lock={model}
    />
  );
};

export default class ResetPassword extends Screen {

  constructor() {
    super("forgotPassword");
  }

  backHandler(m) {
    return hasScreen(m, "login") ? cancelResetPassword : undefined;
  }

  submitHandler() {
    return resetPassword;
  }

  renderAuxiliaryPane(m) {
    return renderPasswordResetConfirmation(m);
  }

  render() {
    return Component;
  }

}
