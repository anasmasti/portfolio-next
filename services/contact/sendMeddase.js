export default function sendContactMessage(data) {
 return fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_VERSION}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key-Access": "application/x-www-form-urlencoded",
      },
      body: data,
    }
  );
}
