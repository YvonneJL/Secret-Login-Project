import ky from "ky";

export default async function postLogin(userName: string, password: string) {
  try {
    const loginData = {
      name: userName,
      secret: password,
    };
    const userInfo = await ky
      .post<{ id: string; name: string; role: string }>(
        "https://stfnsr-supercode_login_screen_project.web.val.run/login",
        { json: loginData }
      )
      .json();
    console.log(userInfo);
    return userInfo;
  } catch (err) {
    console.log(err);
    return null;
  }
}
