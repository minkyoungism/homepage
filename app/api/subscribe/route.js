export async function POST(request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return Response.json({ error: "이름과 이메일을 입력해주세요." }, { status: 400 });
    }

    const body = new URLSearchParams({ email, name });

    const res = await fetch(
      "https://stibee.com/api/v1.0/lists/sFljpfdg51WOJ5sAlYx5SAIMTngR_w==/public/subscribers",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      }
    );

    if (!res.ok) {
      return Response.json({ error: "구독 처리 중 오류가 발생했습니다." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("Subscribe error:", e);
    return Response.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
