import { CardPopupLayout } from "@controller/popup/CardPopupLayout";
import { colorSystems } from "@styles/app-color";
import Logo from "@assets-images/logo.svg?react";
import LineH from "@components/line/LineH";
import { FromInput } from "@controller/input/FromInput";
import { useRef, useState } from "react";
import { valuePadding } from "@styles/app-ui-value";
import { DefaultButton } from "@components/buttons/DefaultButton";
import StringUtils from "@utils/string-utils";
import { useAppDialogHook } from "@hook/context-providers/app-dialog-hook";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enum/route-path.enum";
import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";
import { fetchPost } from "@modules/api/network-service-function-model";
import { ApiEndPoint } from "@modules/api/api-end-point.enum";
import { LoadingModal } from "@controller/modals/LoadingModal";
import ReCAPTCHA from "react-google-recaptcha";

const LoginPage = () => {
  const navigate = useNavigate();
  const { showAppErrorDialog } = useAppDialogHook();
  const { userStateChange } = useBasicDataHook();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showLoading, setShowLoading] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string|null>(null)

  const onPressSignIn = () => {

    if (email == "" || password == "") {
      showAppErrorDialog("Please fill user email and password!");
      return;
    } else if (!StringUtils.isValidEmail(email)) {
      showAppErrorDialog("Email format invalid!");
      return;
    } else if (!StringUtils.isValidPassword(password)) {
      showAppErrorDialog(
        "Password format invalid!\nThe password must include uppercase, lowercase, a number and at least 6 characters total."
      );
      return;
    } else if(recaptchaToken == null) {
      showAppErrorDialog("Please verify captcha!");
      return;
    }

    setShowLoading(true);
    fetchPost(
      ApiEndPoint.LOGIN,
      {
        email: email,
        password: password,
      },
      undefined
    )
      .then((r) => {
        setShowLoading(false);
        userStateChange({
          email: email,
          authData: r.headers,
        });
        setTimeout(() => {
          if (
            r.headers.accesstoken &&
            r.headers.accesstoken != "" &&
            r.headers.xUid &&
            r.headers.xUid != ""
          ) {
            navigate(RoutePath.HOME);
          } else {
            resetReCaptCha()
            showAppErrorDialog("Error happen! Please try again!");
          }
        }, 500);
      })
      .catch((e) => {
        resetReCaptCha()
        setShowLoading(false);
        showAppErrorDialog(e);
      })
  };

  const resetReCaptCha = () => {
    setRecaptchaToken(null)
    recaptchaRef.current?.reset()
  }

  const onReCaptChaChange = (v: string | null) => {
    setRecaptchaToken(v)
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        alignContent: "center",
        backgroundColor: colorSystems.primary,
      }}
    >
      <CardPopupLayout
        viewStyle={{
          margin: "auto",
          paddingLeft: undefined,
          paddingRight: undefined,
        }}
      >
        <div style={{ width: 186, marginLeft: "auto", marginRight: "auto" }}>
          <Logo />
        </div>
        <LineH viewStyle={{ marginTop: 24, marginBottom: 24 }} />
        <div
          style={{
            paddingLeft: valuePadding.popupLeft,
            paddingRight: valuePadding.popupRight,
          }}
        >
          <FromInput
            labelProps={{
              label: "Email",
            }}
            inputProps={{
              value: email,
              onChange: setEmail,
            }}
          />
          <FromInput
            labelProps={{
              label: "Passwrod",
              viewStyle: {
                marginTop: 40,
              },
            }}
            inputProps={{
              value: password,
              onChange: setPassword,
              type: "password",
            }}
          />
          <div style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
              onChange={onReCaptChaChange}
            />
          </div>
          <DefaultButton
            label="SIGN IN"
            viewStyle={{ marginTop: 40 }}
            onClick={onPressSignIn}
          />
        </div>
        <LoadingModal isOpen={showLoading} setIsOpen={setShowLoading} />
      </CardPopupLayout>
    </div>
  );
};

export default LoginPage;
