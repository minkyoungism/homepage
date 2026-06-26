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
        subscribers: [{ email, $name: name }],
        groupIds: [],
        confirmEmailYN: "N",
      }),
    });

    if (!res.ok) {
      return Response.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: res.status });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
