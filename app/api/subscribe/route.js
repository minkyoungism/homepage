export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return Response.json({ error: "이름과 이메일을 입력해주세요." }, { status: 400 });
    }

    const res = await fetch("https://stibee.com/api/v1.0/lists/480490/subscribers", {
      method: "POST",
      headers: {
        AccessToken: process.env.STIBEE_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscribers: [{ email, "$name": name }],
        groupIds: [],
        confirmEmailYN: "N",
      }),
    });

    const data = await res.json();
    console.log("Stibee status:", res.status, "body:", JSON.stringify(data));

    // 스티비는 HTTP 200이어도 Ok: false로 실패를 전달하는 경우가 있음
    if (!res.ok || data.Ok === false) {
      console.error("Stibee error detail:", JSON.stringify(data));
      return Response.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("Subscribe exception:", e);
    return Response.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
