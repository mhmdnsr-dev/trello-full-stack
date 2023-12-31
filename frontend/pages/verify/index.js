const token = new URL(location.href).searchParams.get("token");

try {
  const res = await fetch(
    "https://trello-app-api.onrender.com/api/user/verify",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.ok) {
    $(".message")
      .html(`Your email is verified now 🥳 go to <a href="/">login</a>`)
      .addClass("text-success");
  } else {
    $(".message")
      .text(
        `Something went wrong, we couldn't verify your email, please try again`
      )
      .addClass("text-danger");
  }
} catch (err) {
  //////////HANDELING
}
